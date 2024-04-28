import React from "react";
import Provider from "@theme-original/Layout/Provider";

export default function ProviderWrapper(props) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/ddx0ngk.css" />
      <Provider {...props} />
    </>
  );
}
