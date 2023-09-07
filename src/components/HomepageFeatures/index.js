import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Video Tutorials",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We have video tutorials to help you get started and configure your
        IgorBox for those that are visual learners.
      </>
    ),
  },
  {
    title: "Join the Community on Discord",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Join the community on{" "}
        <a href="https://discord.gg/urGRjudMM2" target="_blank">
          Discord
        </a>{" "}
        to get help from other users and the IgorBox team.
      </>
    ),
  },
  {
    title: "Contact Us for Support",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        If you need help with your IgorBox, you can contact us directly for
        support and help with your IgorBox.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
