---
sidebar_position: 2
description: "Save the WiFi networks your controllers connect to"
---

# WiFi Credentials

If your controllers connect over WiFi, save the network details once in Studio and hand them to controllers during setup — instead of typing a password into every box. Manage them under **Settings → WiFi Credentials** (Admins and Owners only).

Credentials are stored securely and only sent to a controller during provisioning. Passwords are never shown again after you save them.

## Add a network

1. Go to **Settings → WiFi Credentials** and click **Add WiFi Network**.
2. Fill in:
   - **Name** — your own label for it (e.g., "Backstage", "Main Office").
   - **Network Name (SSID)** — the actual WiFi name.
   - **Open network (no password)** — check this for an open network; otherwise enter the **Password**.
   - **Set as default** — see below.
3. Click **Add Network**.

## The default network

When you provision a new controller and don't pick a specific network, it uses your **default** credential. To change which one is default, open the menu on a network card and choose **Set as Default**.

## Edit, delete, and "in use"

Each saved network shows how many controllers are configured to use it.

- **Edit** — change the name, SSID, or password. Leave the password blank to keep the existing one.
- **Delete** — if any controllers are using it, Studio warns you; those controllers fall back to your default network the next time they're provisioned.

You can save up to **10 networks** per Studio.
