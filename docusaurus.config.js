// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PileusLab Site',
  tagline: 'Welcome to PileusLab official documentation site',
  favicon: 'img/favicon.ico',

  url: 'https://pileuslab.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'PileusLab', // GitHub kullanıcı/organizasyon adı
  projectName: 'pileuslab.github.io', // Repo adı

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // site kökü doğrudan docs olacak
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/PileusLab/pileuslab.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'PileusLab',
      logo: {
        alt: 'PileusLab Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { href: 'https://github.com/PileusLab/pileuslab.github.io', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{ label: 'Getting Started', to: '/' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/PileusLab' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} PileusLab.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
