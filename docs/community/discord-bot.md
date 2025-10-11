---
sidebar_position: 1
---

# Discord Bot (Carl)

Carl is the official Discord bot for the IgorBox community. Carl helps you stay connected, get reminders, verify your IgorBox account, and have some fun along the way.

## Join the Discord Server

Not on our Discord yet? Join us at [discord.igorbox.com](https://discord.igorbox.com)!

Our Discord server is the best place to:

- Get help and support from the community and staff
- Share your projects and ideas
- Stay up to date with the latest news and announcements
- Connect with other IgorBox users

## How to Use Carl

Carl responds to commands in three ways:

### 1. Slash Commands (Recommended)

Type `/` in any channel and select a command from the menu. This is the easiest way to interact with Carl.

**Example:** `/help`, `/remind_me`, `/dad-joke`

### 2. @Mentions (In Server Channels)

Mention **@Carl** followed by keywords in any server channel.

**Example:** `@Carl help`, `@Carl tell me a dad joke`

### 3. Direct Messages

Send Carl a DM! You don't need to use @ mentions in DMs - just type naturally.

**Example:** `help`, `when is the next rocket launch?`

## Getting Started

### Set Your Timezone First!

:::info
For the best experience with Carl, especially for reminders and time-based features, **set your timezone right away**.
:::

**Command:** `/set_timezone <timezone>`

**Examples:**

- `/set_timezone America/New_York`
- `/set_timezone America/Chicago`
- `/set_timezone America/Los_Angeles`
- `/set_timezone Europe/London`
- `/set_timezone Asia/Tokyo`

This ensures all times Carl shows you are in your local timezone, and your reminders fire at the right time for you.

## Available Commands

### /help

Show all available commands based on your role

**Usage:** `/help`

**Also works:** `@Carl help` or DM `help`

### /verify_me

Verify your IgorBox account connection to get the "IgorBox User" role on Discord

:::info
This will give you the `IgorBox User` role on Discord which gives you access to special chat channels and additional tools
:::

**Usage:** `/verify_me`

#### How Verification Works

To verify, your Discord account must be connected to your IgorBox account. Here's how:

**If you don't have an IgorBox account yet:**

1. Sign up at [account.igorbox.com/auth/signin](https://account.igorbox.com/auth/signin)
2. **Important:** Use "Sign in with Discord" during signup!
3. Come back to Discord and run `/verify_me`

**If you already have an IgorBox account (Google/GitHub/etc.):**

1. Go to [account.igorbox.com](https://account.igorbox.com/)
2. Log in with your existing method
3. Navigate to "Connected Accounts" or "Login Methods"
4. Click "Connect Discord"
5. Authorize Discord
6. Come back to Discord and run `/verify_me` again!

**Need help?** Ask in the **help-and-support** forum channel.

### /remind_me

Create a personal reminder (sent via DM)

**Usage:** `/remind_me <time> <message>`

**Examples:**

- `/remind_me in 30 minutes Check the oven`
- `/remind_me tomorrow at 9am Call the mechanic`
- `/remind_me december 25 at noon Open presents`

**Also works:** `@Carl remind me to check laundry in 30 minutes` (in channels) or DM `remind me to call mom at 5pm`

### /reminders

View and cancel your active reminders

**Usage:** `/reminders`

**Note:** Shows both DM and room reminders you created. Click buttons to cancel.

**Also works:** DM `show my reminders` or `list reminders`

### /dad-joke

Get a random dad joke

**Usage:** `/dad-joke`

**Also works:** `@Carl tell me a dad joke` or DM `joke`

### /rocket-launch

See the next Florida rocket launch

**Usage:** `/rocket-launch`

**Also works:** `@Carl when is the next rocket launch?` or DM `rocket launch`

## Reminder Time Formats

Carl understands natural language time formats:

### Relative Times

- `in X minutes` - Example: `in 30 minutes`
- `in X hours` - Example: `in 2 hours`
- `in X days` - Example: `in 3 days`

### Specific Times

- `tomorrow at Xam/pm` - Example: `tomorrow at 9am`
- `[day] at [time]` - Example: `monday at 10:30am`
- `[month] [day] at [time]` - Example: `december 25 at noon`
- `next [day] at [time]` - Example: `next friday at 5pm`

### Special Times

- `noon` - 12:00 PM
- `midnight` - 12:00 AM

## Tips and Tricks

- **Ephemeral Responses:** Many commands respond with messages only you can see (ephemeral). Others can't see your command results.
- **DM Privacy:** Use DMs for private conversations with Carl (verification, personal reminders, etc.)
- **Role Filtering:** `/help` automatically shows only commands you have permission to use
- **Button Interactions:** Many commands have buttons - click them to cancel reminders, navigate lists, etc.

## Need Help?

- **In Discord:** Type `/help` or `@Carl help`
- **Via DM:** Send Carl a DM with `help`
- **Public Support:** Ask in the **help-and-support** forum channel
- **Technical Issues:** Mention **@Engineering** in the **#support** channel

You can also reach our support team through the methods listed on our [Contact Support](/docs/contact) page.
