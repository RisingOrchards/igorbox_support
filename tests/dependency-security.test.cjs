const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const test = require("node:test");

const api = require("@opentelemetry/api");
const { W3CBaggagePropagator } = require("@opentelemetry/core");

const baggageGetter = {
  get(carrier, key) {
    return carrier[key];
  },
  keys(carrier) {
    return Object.keys(carrier);
  },
};

test("OpenTelemetry baggage extraction enforces W3C limits", () => {
  const header = Array.from(
    { length: 200 },
    (_, index) => `key${index}=${"x".repeat(48)}`,
  ).join(",");

  const context = new W3CBaggagePropagator().extract(
    api.ROOT_CONTEXT,
    { baggage: header },
    baggageGetter,
  );
  const entries = api.propagation.getBaggage(context).getAllEntries();
  const serializedLength = entries.reduce(
    (length, [key, entry], index) =>
      length +
      (index === 0 ? 0 : 1) +
      `${encodeURIComponent(key)}=${encodeURIComponent(entry.value)}`.length,
    0,
  );

  assert.ok(entries.length <= 180);
  assert.ok(serializedLength <= 8192);
  assert.ok(entries.length < 200);
});

test("OpenTelemetry baggage extraction skips oversized entries", () => {
  const context = new W3CBaggagePropagator().extract(
    api.ROOT_CONTEXT,
    { baggage: `oversized=${"x".repeat(5000)},safe=ok` },
    baggageGetter,
  );
  const baggage = api.propagation.getBaggage(context);

  assert.equal(baggage.getEntry("oversized"), undefined);
  assert.equal(baggage.getEntry("safe").value, "ok");
});

test("Coralogix bundled baggage propagator carries the same limits", () => {
  const packagePath = require.resolve("@coralogix/browser/package.json");
  const source = fs.readFileSync(
    path.join(path.dirname(packagePath), "index.esm2.js"),
    "utf8",
  );
  const extractStart = source.indexOf(
    "W3CBaggagePropagator.prototype.extract",
  );
  const extractEnd = source.indexOf(
    "W3CBaggagePropagator.prototype.fields",
    extractStart,
  );
  const extractSource = source.slice(extractStart, extractEnd);

  assert.match(extractSource, /count < BAGGAGE_MAX_NAME_VALUE_PAIRS/);
  assert.match(extractSource, /entryLength <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS/);
  assert.match(extractSource, /totalSize \+ entrySize > BAGGAGE_MAX_TOTAL_LENGTH/);
  assert.doesNotMatch(extractSource, /\.split\(BAGGAGE_ITEMS_SEPARATOR\)/);
});

test("patched image-size replacement rejects malicious containers promptly", () => {
  const script = String.raw`
    const { imageSize } = require("image-size");
    const payloads = [
      [0, 0, 0, 0, 0x4a, 0x58, 0x4c, 0x20],
      [0, 0, 0, 0, 0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66],
      [0x69, 0x63, 0x6e, 0x73, 0, 0, 0, 16, 0x69, 0x63, 0x30, 0x37, 0, 0, 0, 0],
    ];
    for (const payload of payloads) {
      try { imageSize(Uint8Array.from(payload)); } catch {}
    }
  `;
  const result = spawnSync(process.execPath, ["-e", script], {
    cwd: path.join(__dirname, ".."),
    timeout: 2000,
  });

  assert.notEqual(result.signal, "SIGTERM");
  assert.equal(result.error, undefined);
  assert.equal(result.status, 0, result.stderr.toString());
});
