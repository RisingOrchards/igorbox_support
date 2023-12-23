import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import {
  IconMessage,
  IconBrandYoutube,
  IconBrandDiscord,
} from "@tabler/icons-react";

const FeatureList = [
  {
    title: "Video Tutorials",
    icon: <IconBrandYoutube size="8rem" stroke={1} />,
    url: "https://www.youtube.com/playlist?list=PLfVK6bChUJrnvhsadbSC-Gs42l93bEPQE",
    description: (
      <>
        We have video tutorials to help you get started and configure your
        IgorBox for those that are visual learners.
      </>
    ),
  },
  {
    title: "Join the Community on Discord",
    icon: <IconBrandDiscord size="8rem" stroke={1} />,
    url: "https://discord.igorbox.com",
    description: (
      <>
        Join the community on Discord. to get help from other users and the
        IgorBox team.
      </>
    ),
  },
  {
    title: "Contact Us for Support",
    icon: <IconMessage size="8rem" stroke={1} />,
    url: "/docs/contact",
    description: (
      <>
        If you need help with your IgorBox, you can contact us directly for
        support and help with your IgorBox.
      </>
    ),
  },
];

function Feature({ Svg, title, description, icon, url }) {
  return (
    <div className={clsx("col col--4", "landing-component")}>
      <a href={url}>
        <div className="text--center">{icon}</div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
