---
sidebar_position: 2
description: "Local management interface available on the IgorBox"
---

# Local Admin Interface

Sometimes you need to change settings or manually uploaded new Firmware to your IgorBox. This is where the local management interface comes in. The local management interface is a web-based interface that is available on your IgorBox when you are connected to the same network as the IgorBox.

## Accessing the Interface

:::note
You must be connected to the same network as the IgorBox to access the local management interface.
:::

:::warning
If your IgorBox is connected to a public network, this interface is available to anyone on that network. We recommend only connecting your IgorBox to a private network.
:::

Navigate to your IgorBox control page on IgorBox.com. At the bottom of the info block on the left side, you will find the "Network Name" of your IgorBox. This is the hostname you will use to access the local management interface.

<div class="text--center">
<img width="400" src="/img/igorbox/network_name.png" alt="Network Name"></img>
</div>

Open a web browser and navigate to `http://<network_name>.local` where `<network_name>` is the Network Name of your IgorBox. You will be presented with the management interface.

<div class="text--center">
<img width="400" src="/img/igorbox/gw_home.jpg" alt="Network Name"></img>
</div>

## Configure Wifi

You can configure the WiFi settings of your IgorBox by clicking on the "WiFi" link in the top menu. This will take you to the WiFi configuration page that you used to setup the WiFi when you first connected your IgorBox.

<div class="text--center">
<img width="400" src="/img/igorbox/gw_wifi_pick.jpg" alt="Pick a Network"></img>
</div>

## Upload Firmware

This page allows you to upload new firmware to your IgorBox. You shouldn't need to use this page unless you are directed to by our support team.

<div class="text--center">
<img width="400" src="/img/igorbox/gw_fw.jpg" alt="Firmware Upload"></img>
</div>

## Change System Settings

On this page you can change system settings. Again, you shouldn't need to change anything here unless you are directed to by our support team.

:::tip
If you change something here and your IgorBox stops working, you can factory reset the IgorBox by holding down the front button and power cycling. This will change everything back to the default settings and our autoconfig will resync with IgorBox.com
:::

<div class="text--center">
<img width="400" src="/img/igorbox/gw_settings.jpg" alt="System Settings"></img>
<img width="400" src="/img/igorbox/gw_settings_2.jpg" alt="System Settings"></img>
</div>

:::note
The "Reset Form to Current" and "Set Form to Defaults" buttons just change the values in the form. You must click the "Apply Settings and Restart" button to make the changes take effect.
:::

## Reboot

You can reboot your IgorBox by clicking on the "Reboot" link. This will reboot the IgorBox and reconnect to IgorBox.com.

## Factory Reset

You can factory reset your IgorBox by clicking on the "Factory Reset" link. This will reset your IgorBox to the factory settings and reboot.
