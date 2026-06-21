// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IgorBox Support",
  tagline: "Get up and running with IgorBox",
  favicon: "img/favicon.ico",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Site-wide Organization structured data (schema.org / JSON-LD) for AI & search.
  headTags: [
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        // Canonical org node, defined on www.igorbox.com. Sharing this @id
        // across both domains fuses help + www into a single entity for
        // search engines and AI systems.
        "@id": "https://www.igorbox.com/#organization",
        name: "IgorBox",
        legalName: "Rising Orchards, LLC dba IgorBox",
        url: "https://www.igorbox.com",
        logo: "https://help.igorbox.com/img/logo.svg",
        description:
          "Show-control hardware and software for haunted houses, escape rooms, and themed entertainment — controllers for props, lighting, pneumatics, and inputs, plus the IgorBox Studio timeline and logic-rules platform.",
        sameAs: [
          "https://github.com/RisingOrchards/igorbox_support",
          "https://www.youtube.com/@igorboxcontrol",
          "https://www.facebook.com/igorboxcontrol",
          "https://www.instagram.com/igorboxcontrol/",
          "https://store.igorbox.com",
        ],
      }),
    },
  ],

  // Build-time values bridged into the client bundle (e.g. for Coralogix RUM).
  // process.env is readable here because the config runs in Node during the
  // build; Vercel injects CORALOGIX_RUM_KEY into that build environment.
  customFields: {
    coralogixRumPublicKey: process.env.CORALOGIX_RUM_KEY,
    coralogixDomain: "US1",
    // Vercel sets VERCEL_ENV (production/preview/development) and the commit
    // SHA automatically — no need to define these manually in the dashboard.
    coralogixEnvironment: process.env.VERCEL_ENV || "production",
    version: process.env.VERCEL_GIT_COMMIT_SHA || "development",
  },

  // Coralogix RUM — runs only in the browser, tracks SPA route changes.
  clientModules: [require.resolve("./src/coralogix-rum.js")],

  // Set the production url of your site here
  url: "https://help.igorbox.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RisingOrchards", // Usually your GitHub org/user name.
  projectName: "igorbox_support", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/RisingOrchards/igorbox_support/blob/main/",
        },

        blog: {
          showReadingTime: true,
          path: "blog",
          routeBasePath: "blog",
          postsPerPage: 10,
          //blogSidebarTitle: "All posts",
          //blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
            title: "IgorBox Blog",
            description: "The latest news and updates from the IgorBox team.",
            copyright: `Copyright © ${new Date().getFullYear()} Rising Orchards, LLC`,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          // "https://github.com/RisingOrchards/igorbox_support/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        gtag: {
          trackingID: "G-FC6CBDXDG9",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("./plugins/llms-txt"),
    [
      "docusaurus-plugin-mcp-server",
      {
        server: { name: "igorbox-docs", version: "1.0.0" },
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Studio docs restructure — Triggers split out of Logic Rules
          {
            from: "/docs/studio/logic-rules/show-triggers",
            to: "/docs/studio/triggers",
          },
          // Legacy IgorBox MKI archive
          { from: "/contact", to: "/docs/contact" },
          {
            from: "/docs/igorbox/getting-started",
            to: "/docs/legacy/igorbox-mki/getting-started",
          },
          {
            from: "/docs/igorbox/connect",
            to: "/docs/legacy/igorbox-mki/connect",
          },
          { from: "/docs/igorbox/wifi", to: "/docs/legacy/igorbox-mki/wifi" },
          {
            from: "/docs/igorbox/local_management",
            to: "/docs/legacy/igorbox-mki/local_management",
          },
          {
            from: "/docs/igorbox/output-8/basics",
            to: "/docs/legacy/igorbox-mki/output-8/basics",
          },
          {
            from: "/docs/igorbox/output-8/wiring-guide",
            to: "/docs/legacy/igorbox-mki/output-8/wiring-guide",
          },
          {
            from: "/docs/igorbox/output-8/error-codes",
            to: "/docs/legacy/igorbox-mki/output-8/error-codes",
          },
          {
            from: "/docs/igorbox/output-8/technical-info",
            to: "/docs/legacy/igorbox-mki/output-8/technical-info",
          },
          {
            from: "/docs/igorbox/input-8/basics",
            to: "/docs/legacy/igorbox-mki/input-8/basics",
          },
          {
            from: "/docs/igorbox/input-8/wiring-guide",
            to: "/docs/legacy/igorbox-mki/input-8/wiring-guide",
          },
          {
            from: "/docs/igorbox/input-8/error-codes",
            to: "/docs/legacy/igorbox-mki/input-8/error-codes",
          },
          {
            from: "/docs/igorbox/input-8/technical-info",
            to: "/docs/legacy/igorbox-mki/input-8/technical-info",
          },
          // Legacy LabRat archive
          {
            from: "/docs/labrat/g1/quick_start",
            to: "/docs/legacy/labrat/g1/quick_start",
          },
          { from: "/docs/labrat/g1/modes", to: "/docs/legacy/labrat/g1/modes" },
          { from: "/docs/labrat/g1/ui", to: "/docs/legacy/labrat/g1/ui" },
          {
            from: "/docs/labrat/g1/tech_specs",
            to: "/docs/legacy/labrat/g1/tech_specs",
          },
          {
            from: "/docs/labrat/g2/overview",
            to: "/docs/legacy/labrat/g2/overview",
          },
          {
            from: "/docs/labrat/g2/configuration",
            to: "/docs/legacy/labrat/g2/configuration",
          },
          {
            from: "/docs/labrat/g2/configurator",
            to: "/docs/legacy/labrat/g2/configurator",
          },
          {
            from: "/docs/labrat/g2/firmware",
            to: "/docs/legacy/labrat/g2/firmware",
          },
          { from: "/docs/labrat/g2/reset", to: "/docs/legacy/labrat/g2/reset" },
          // Old category landing pages — redirect to a real page inside each category
          {
            from: "/docs/category/output-8",
            to: "/docs/legacy/igorbox-mki/output-8/basics",
          },
          {
            from: "/docs/category/input-8",
            to: "/docs/legacy/igorbox-mki/input-8/basics",
          },
          {
            from: "/docs/category/labrat",
            to: "/docs/legacy/labrat/g2/overview",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/opengraph-image-control.png",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: "IgorBox Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "/docs/contact",
            label: "Contact Support",
            position: "left",
          },
          {
            href: "https://www.igorbox.com",
            label: "IgorBox Home",
            position: "left",
          },
          {
            href: "https://store.igorbox.com",
            label: "IgorBox Store",
            position: "left",
          },
          {
            href: "https://github.com/RisingOrchards/igorbox_support",
            label: "Edit on GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Getting Started",
            items: [
              {
                label: "Documentation Home",
                to: "/docs/intro",
              },
              {
                label: "Output 8 MKII",
                to: "/docs/controllers/output-8-mkii/overview",
              },
              {
                label: "Input 16",
                to: "/docs/controllers/input-16/overview",
              },
              {
                label: "LED Controller",
                to: "/docs/controllers/led-controller/overview",
              },
              {
                label: "IgorBox Studio",
                to: "/docs/studio/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join the Discord",
                href: "https://discord.igorbox.com",
              },
              {
                label: "Subscribe on YouTube",
                href: "https://www.youtube.com/@igorboxcontrol",
              },
              {
                label: "Like on Facebook",
                href: "https://www.facebook.com/igorboxcontrol",
              },
              {
                label: "Follow on Instagram",
                href: "https://www.instagram.com/igorboxcontrol/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "IgorBox Blog",
                to: "/blog",
              },
              {
                label: "IgorBox Home",
                href: "https://www.igorbox.com",
              },
              {
                label: "Store",
                href: "https://store.igorbox.com",
              },
              {
                label: "System Status",
                href: "https://status.igorbox.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rising Orchards, LLC<br/><span>Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
