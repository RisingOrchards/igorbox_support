import siteConfig from "@generated/docusaurus.config";
import { CoralogixRum } from "@coralogix/browser";

// Values injected at build time from env vars (set in / provided by Vercel)
// via customFields in docusaurus.config.js — process.env is not available to
// browser code in Docusaurus, so it must be bridged through the config.
const {
  coralogixRumPublicKey,
  coralogixDomain,
  coralogixEnvironment,
  version,
} = siteConfig.customFields;

if (typeof window !== "undefined" && coralogixRumPublicKey) {
  CoralogixRum.init({
    application: "igorbox-support",
    environment: coralogixEnvironment,
    version,
    coralogixDomain,
    public_key: coralogixRumPublicKey,
    sessionRecordingConfig: {
      enable: true,
      autoStartSessionRecording: true,
      recordConsoleEvents: true,
      sessionRecordingSampleRate: 100,
    },
    memoryUsageConfig: {
      enabled: true,
      // interval: 300_000 // Defaults to 5 minutes
    },
    traceParentInHeader: {
      enabled: true,
      options: {
        propagateTraceHeaderCorsUrls: [/https?:\/\/.*\.igorbox[^.]*\.[^.]+/],
      },
    },
  });
}
