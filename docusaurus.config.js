// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IgorBox Support",
  tagline: "Get up and running with IgorBox",
  favicon: "img/favicon.ico",

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          // "https://github.com/RisingOrchards/igorbox_support/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-lunr-search")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
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
          { to: "/blog", label: "Tech Blog", position: "left" },
          {
            to: "https://www.igorbox.com",
            label: "IgorBox.com",
            position: "left",
          },
          {
            href: "https://github.com/RisingOrchards/igorbox_support",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Setup Your IgorBox",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/urGRjudMM2",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@risingorchards",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/profile.php?id=100087874489151",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "News",
                to: "https://risingorchards.com/news",
              },
              {
                label: "Tech Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/RisingOrchards",
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
    }),
};

module.exports = config;
