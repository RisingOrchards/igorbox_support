# Dependency security backports

The OpenTelemetry patches backport the W3C baggage extraction limits released
in `@opentelemetry/core` 2.8.0 to the 1.25.1 generation required by
`@coralogix/browser` 3.23.2. Coralogix bundles its own copy of the propagator,
so both packages must be patched.

Remove both patches and `patch-package` after Coralogix ships a browser SDK on
OpenTelemetry 2.8.0 or later. The security regression tests must continue to
pass after that migration.

The root override for `image-size` uses `image-size-next` as a drop-in,
security-patched replacement until Docusaurus moves away from the archived
upstream package. The scoped SockJS override uses the patched `uuid` API while
preserving the `uuid.v4()` call used by SockJS.
