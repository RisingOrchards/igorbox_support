---
sidebar_position: 4
description: "Restrict Studio access to specific IP addresses"
---

# IP Allow-list

For extra security, you can restrict who's allowed to sign in to your Studio by IP address. When the allow-list is on, only people connecting from an approved address (or range) can get in. Find it under **Settings → Security** (Admins and Owners only).

:::warning
It's easy to lock yourself out. Studio shows **your current IP address** on this page — make sure it's on the list before you turn the allow-list on. If you try to enable it without your own address, Studio warns you first.
:::

## Set it up

1. Go to **Settings → Security**.
2. Add an address or range:
   - A single address, like `203.0.113.42`.
   - A range in CIDR form, like `203.0.113.0/24` (the whole `203.0.113.*` block).
   - Or click **Add my current IP** to add the address you're on right now.
3. Turn on **Enable IP Whitelist**.
4. Click **Save Changes**.

Changes take effect immediately. To turn the restriction off again, switch off the toggle and **Save Changes**.

This restricts people signing in to Studio — it does not affect your controllers connecting to the cloud.
