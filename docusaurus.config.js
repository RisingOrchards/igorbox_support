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
    require.resolve("docusaurus-plugin-hubspot"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/opengraph-image-carl-support.png",
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
            title: "Getting Started Docs",
            items: [
              {
                label: "Connect your IgorBox",
                to: "/docs/igorbox/connect",
              },
              {
                label: "Getting Started with LabRat",
                to: "/docs/category/labrat",
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
                href: "https://www.youtube.com/@risingorchards",
              },
              {
                label: "Like on Facebook",
                href: "https://www.facebook.com/profile.php?id=100087874489151",
              },
              {
                label: "Follow on Instagram",
                href: "https://www.instagram.com/risingorchards/",
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
                label: "Company News",
                href: "https://risingorchards.com/news",
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
      hubspot: {
        accountId: 23439067,
        async: false, // OPTIONAL: sets the async attribute on the script tag, defaults to false
        defer: false, // OPTIONAL: sets the defer attribute on the script tag, defaults to false
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
