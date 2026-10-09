// @ts-check

const config = {
  title: 'ΕΡΓΑΝΗ Documentation',
  tagline: 'ΕΡΓΑΝΗ II · Ψηφιακή Οργάνωση · Ψηφιακή Κάρτα',
  favicon: 'img/favicon.ico',

  url: 'https://YOUR-DOMAIN.example',
  baseUrl: '/',

  organizationName: 'YOUR-ORG',
  projectName: 'ergani-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'el',
    locales: ['el'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // This repository may be distributed before its first Git commit.
          // Avoid making the documentation build depend on commit history.
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          lastVersion: 'current',
          includeCurrentVersion: true,
          versions: { current: { label: '2024', path: '' }, '2022': { label: '2022', path: '2022', banner: 'unmaintained', badge: true } },
          breadcrumbs: true,
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
      title: 'ΕΡΓΑΝΗ Documentation',
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Τεκμηρίωση' },
        { to: '/docs/changelog', label: 'Αλλαγές', position: 'left' },
        { type: 'docsVersionDropdown', position: 'right' },
        { href: 'https://github.com/YOUR-ORG/ergani-docs', label: 'GitHub', position: 'right' },
      ],
    },

    // Fill these values after your public site is deployed.
    // Docusaurus supports official Algolia DocSearch through preset-classic.
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_ONLY_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   contextualSearch: true,
    //   placeholder: 'Αναζήτηση στην τεκμηρίωση…',
    // },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'ΕΡΓΑΝΗ II', to: '/docs/ergani-ii/overview' },
            { label: 'Ψηφιακή Κάρτα', to: '/docs/digital-card/overview' },
            { label: 'API', to: '/docs/api/overview' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ΕΡΓΑΝΗ Documentation`,
    },

    prism: {
      additionalLanguages: ['bash', 'json', 'http'],
    },
  },
};

module.exports = config;
