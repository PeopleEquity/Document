const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tech Sharing from PeopleEquity',
  tagline: 'Rock the code, Shake the world',
  url: 'https://peopleequity.club/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'PeopleEquity', // Usually your GitHub org/user name.
  projectName: 'Document', // Usually your repo name.
  themeConfig: {
    colorMode:{  
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
    },    
    navbar: {
      title: 'PeopleEquity',
      logo: {
        alt: 'PeopleEquity',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Article & Doc',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/peopleequity/Document',
          label: 'GitHub',
          position: 'right', // 此处可以加入个人的其它技术平台（待）
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/stevekeol/Taiki-website/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/stevekeol/Taiki-website/tree/master/',
        },
        video: {
          showReadingTime: true,
          editUrl:
            'https://github.com/stevekeol/Taiki-website/tree/master/',
        },
        go: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/stevekeol/Taiki-website/tree/master/docs',
        },        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@devbookhq/docusaurus-code-video-plugin'],
};
