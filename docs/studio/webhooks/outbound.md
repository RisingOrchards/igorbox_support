---
sidebar_position: 2
description: "Have your IgorBox show fire off notifications to other systems"
---

# Outbound Webhooks

An **outbound webhook** lets a [Logic Rule](/docs/studio/logic-rules/overview) call out to an external URL whenever something happens. Your show can post to Slack when a scene fires, push to a stats dashboard, hit a third-party service — anything that accepts an HTTP request.

:::info
Webhooks are available on the **Pro** and **Enterprise** plans. If your plan doesn't include them, you'll see an upgrade prompt where the webhook tools would be.
:::

## Setting up an outbound webhook

1. From the top navigation, open **Logic Rules**, then the **Webhooks** tab. Click **New Webhook** and set **Direction** to **Outbound**.
2. Give it a name.
3. Configure:
   - **URL** — the external endpoint
   - **Method** — usually POST
   - **Headers** — optional. Studio sends `Content-Type: application/json` automatically. An `Authorization` header isn't supported — if your service needs a token, use a custom header name (like `X-API-Key`) or put the token in the URL.
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

Every outbound webhook call is logged. Open the webhook's **Delivery Logs** (the history icon on the webhook row) to see when it fired, the response code, how long it took, and any error. Useful for debugging "why didn't my Slack message show up?"
