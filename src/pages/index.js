import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <link rel="stylesheet" href="https://use.typekit.net/ddx0ngk.css" />
      <div className="container">
        <div className="text--center">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className="text--center padding-horiz--md action-button">
          <Link
            className="button--secondary button--lg margin--sm btn-grad"
            to="/docs/intro"
          >
            Get Started with your IgorBox
          </Link>
        </div>
        <div className="buttons__bar">
          <p>Jump to specific device documentation:</p>
        </div>
        <div className="text--center padding-horiz--md">
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/igorbox/getting-started"
          >
            IgorBox Basics
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/category/output-8"
          >
            Output 8
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/category/input-8"
          >
            Input 8
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/category/labrat"
          >
            LabRat
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/labrat/g2/configurator"
          >
            LabRat G2 Configurator
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  //const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="Get started with your IgorBox.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
