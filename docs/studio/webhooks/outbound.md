---
sidebar_position: 2
description: "Have your IgorBox show fire off notifications to other systems"
---

# Outbound Webhooks

An **outbound webhook** lets a [Logic Rule](/docs/studio/logic-rules/overview) call out to an external URL whenever something happens. Your show can post to Slack when a scene fires, push to a stats dashboard, hit a third-party service — anything that accepts an HTTP request.

## Setting up an outbound webhook

1. Sidebar → **Webhooks** → **New Outbound Webhook**.
2. Give it a name.
3. Configure:
   - **URL** — the external endpoint
   - **Method** — usually POST
   - **Headers** — optional (typically `Content-Type: application/json`, plus any auth headers your service needs)
   - **Body** — optional; supports [template variables](template-variables) so the message can include the controller name, timestamp, etc.
4. Save.

## Wiring it into a rule

In the Logic Rules editor, drag a **Webhook Emitter** block into the graph. Pick the outbound webhook you set up. Wire any signal to its input.

When the input fires, the webhook is called.

## Where outbound webhooks can point

Outbound webhooks must point to **public internet** addresses. They can't reach private/internal IPs, `localhost`, or addresses on your local network — that's a safety thing to prevent surprises.

## Reliability

Outbound webhooks are **best-effort** — they fire once. If the receiver is down or returns an error, IgorBox logs the failure but doesn't retry. The rule continues regardless.

If you're integrating with a service where every event matters, build retry logic into your receiver — it's closer to the data and is the right place to handle reliability.

## Audit log

Every outbound webhook call is logged. Open the webhook in Studio → **History** tab to see when it fired, what it sent, and what response came back. Useful for debugging "why didn't my Slack message show up?"
