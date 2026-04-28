---
sidebar_position: 1
description: "Trigger your IgorBox show from external systems"
---

# Inbound Webhooks

An **inbound webhook** is a special URL that, when something hits it, fires a trigger inside your show. It's how you get external systems — ticketing platforms, room management software, custom hardware, scheduled tasks — to fire IgorBox cues.

## Setting up an inbound webhook

1. From the sidebar, click **Webhooks** → **New Inbound Webhook**.
2. Give it a name (e.g., "Ticketing System Trigger").
3. Studio generates a unique URL for you.
4. Save.

## Wiring it into a rule

Open the [Logic Rules](/docs/studio/logic-rules/overview) editor. Drag a **Webhook Input** block into the graph, pick the inbound webhook you just created, and wire its output to whatever you want it to fire — a show trigger, a counter, anything else.

When the URL gets called, the rule fires.

## Using the URL

Anything that can make an HTTP request can fire the webhook — your ticketing system, a script, a smart-home automation, your phone. Send an HTTP `POST` to the URL and the webhook fires.

The URL itself is the secret. Don't share it publicly — anyone who has the URL can trigger your show.

## Rotating the URL

If a webhook URL leaks (committed to a public repo, posted in Slack, whatever), open the webhook in Studio and click **Rotate Token**. The old URL stops working immediately and you'll get a new one. Update whichever external system was calling the old URL.

## Common patterns

- **Ticketing → show start.** Your ticketing system fires the webhook when a guest scans in; the show plays.
- **External hardware → show.** A custom microcontroller on the same WiFi fires the webhook when its sensor activates.
- **Scheduled task → daily routine.** A scheduled task hits the webhook each morning to start the daily ambient.
- **Mobile app → manual fire.** Your operator's phone has a "fire scene" button that hits the webhook.

## Good to know

Webhooks are **fire-and-forget** — Studio responds as soon as it receives the call, before the show actually starts. Don't expect a response that confirms the show fired.

Webhooks are **not retried** — if the controller is offline when the webhook is called, the trigger is dropped. For mission-critical triggering, use a wired input or a [controller group](/docs/studio/controller-groups).
