// @ts-check

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TNTT Wiki',
  tagline: 'The complete reference for TNTT',
  url: 'https://tntt-wiki.github.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/learn/tntt_logo.jpg',
  trailingSlash: false,
  organizationName: 'tristandam', // Usually your GitHub org/user name.
  projectName: 'tntt-wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    announcementBar: {
      id: 'contribute',
      content:
        'Would you like to correct/contribute a resource or guide? <a target="_blank" href="https://assembly.sc">Click here</a> for instructions.',
      backgroundColor: '#7da7ff',
      textColor: '#000000',
      isCloseable: false,
    },
    image: 'img/learn/tntt_logo.jpg',
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
    },
    matomo: {
      matomoUrl: 'https://matomo.antonionardella.it/',
      siteId: '6',
    },
    hotjar: {
      applicationId: '2809821',
    },
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    imageSlider: {
      videoPlaceholder: '/img/infographics/video-placeholder.png',
    },
    prism: {
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    cards: [
      {
        title: 'Au Nhi',
        image: 'img/learn/au_khan.jpg',
        link: 'learn/about-iota/an-introduction-to-iota',
        description:
          'Resources and lessons for dealing with high energy seedlings!',
      },
      {
        title: 'Thieu Nhi',
        image: 'img/learn/tn_khan.jpg',
        link: 'learn/about-iota/an-introduction-to-iota',
        description:
          'Resources such as lesson plans, games, and songs appropriate for Nganh Thieu!',
      },
      {
        title: 'Nghia Si',
        image: 'img/learn/ns_khan.jpg',
        link: 'learn/about-iota/an-introduction-to-iota',
        description:
          'Resources for teaching and organizing events to bring Nghia Si to their maximum potential.',
      },
      {
        title: 'Hiep Si',
        image: 'img/learn/hs_khan.jpg',
        link: 'participate/support-the-network/about-nodes',
        description:
          'Lessons and resources for training Knights of The Eucharist and soon-to-be Huynh Trưởng.',
      },
      {
        title: 'Huynh Trưởng',
        image: 'img/learn/ht_khan.jpg',
        link: 'participate/support-the-network/about-nodes',
        description:
          'Resources for chapter management, planning camps, retreats, and more!',
      }
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'TNTT Wiki Logo',
        src: 'img/learn/tntt_logo.jpg',
        srcDark: 'img/learn/tntt_logo.jpg',
      },
      items: [
        {
          label: 'Au Nhi',
          to: 'learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Thieu Nhi',
          to: 'participate/support-the-network/about-nodes',
          activeBaseRegex: '^/participate/.*',
        },
        {
          label: 'Nghia Si',
          to: 'participate/support-the-network/about-nodes',
          activeBaseRegex: '^/participate/.*',
        },
        {
          label: 'Participate',
          to: 'participate/support-the-network/about-nodes',
          activeBaseRegex: '^/participate/.*',
        },
        {
          label: 'Huynh Truong',
          to: 'participate/support-the-network/about-nodes',
          activeBaseRegex: '^/participate/.*',
        },
        {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 3 4',
            '0 1 3 4',
            '5 1 3 2',
            '5 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
          ],
          items_: [
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Getting Started',
                  sublabel: 'IOTA development basics',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
              ],
            },
            {
              label: 'Chrysalis (IOTA 1.5)',
              items: [
                {
                  label: 'Chrysalis Docs',
                  sublabel: 'Mainnet documentation',
                  to: 'chrysalis-docs/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/chrysalis-docs.*',
                },
                {
                  label: 'Bee Node',
                  sublabel: 'IOTA node written in Rust',
                  to: 'bee/welcome',
                  icon: '\ue900',
                  activeBaseRegex: '^/bee/.*',
                },
                {
                  label: 'Hornet Node',
                  sublabel: 'IOTA node written in Go',
                  to: 'hornet/welcome',
                  icon: '\ue904',
                  activeBaseRegex: '^/hornet/.*',
                },
                {
                  label: 'Chronicle Permanode',
                  sublabel: 'IOTA permanode',
                  to: 'chronicle.rs/welcome',
                  icon: '\ue90c',
                  activeBaseRegex: '^/chronicle.rs/.*',
                },
              ],
            },
            {
              label: 'Coordicide (IOTA 2.0)',
              items: [
                {
                  label: 'Coordicide Specs',
                  sublabel: 'Decentralizing IOTA',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
                {
                  label: 'GoShimmer Node',
                  sublabel: 'IOTA 2.0 node',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
              ],
            },
            {
              label: 'Libraries',
              items: [
                {
                  label: 'Client',
                  sublabel: 'Interact with the IOTA network',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Wallet',
                  sublabel: 'Build IOTA wallets',
                  to: 'wallet.rs/welcome',
                  icon: '\ue90a',
                  activeBaseRegex: '^/wallet.rs/.*',
                },
                {
                  label: 'Stronghold',
                  sublabel: 'Handle secrets securely',
                  to: 'stronghold.rs/welcome',
                  icon: '\ue909',
                  activeBaseRegex: '^/stronghold.rs/.*',
                },
                {
                  label: 'Identity',
                  sublabel: 'Identity framework',
                  to: 'identity.rs/introduction',
                  icon: '\ue905',
                  activeBaseRegex: '^/identity.rs/.*',
                },
                {
                  label: 'Streams',
                  sublabel: 'Share data securely',
                  to: 'streams/welcome',
                  icon: '\ue908',
                  activeBaseRegex: '^/streams/.*',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              items: [
                {
                  label: 'Wasp Node',
                  sublabel: 'Smart contract node',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
              ],
            },
            {
              label: 'Integrations',
              items: [
                {
                  label: 'Streams and Identity',
                  sublabel: 'Integrate IOTA seamlessly',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
              ],
            },
          ],
        },
        { to: '/blog', label: 'Contribute', position: 'right' },
        { to: '/about', label: 'About', position: 'right' },
        { to: '/team', label: 'Team', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About IOTA',
              to: 'learn/about-iota/an-introduction-to-iota',
            },
            {
              label: 'IOTA Token',
              to: 'learn/iota-token/buying-iota',
            },
            {
              label: 'Wallets',
              to: 'learn/wallets/what-is-a-wallet',
            },
            {
              label: 'Networks',
              to: 'learn/networks/iota-1.5-chrysalis',
            },
            {
              label: 'Glossary',
              to: 'learn/glossary',
            },
            {
              label: 'Research',
              to: 'learn/research/research-outline',
            },
            {
              label: 'Future of IOTA',
              to: 'learn/future/future-of-iota',
            },
          ],
        },
        {
          title: 'PARTICIPATE',
          items: [
            {
              label: 'Support the network',
              to: 'participate/support-the-network/about-nodes',
            },
            {
              label: 'The Community',
              to: 'participate/the-community/discord',
            },
            {
              label: 'Partnerships',
              href: 'https://www.iota.org/solutions/partnerships',
            },
            {
              label: 'Funding',
              to: 'participate/funding/edf-funding',
            },
            {
              label: 'Use Cases',
              to: 'participate/use-cases/industry-applications',
            },
            {
              label: 'Frameworks',
              to: 'participate/frameworks/introduction',
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: 'build/welcome',
            },
            {
              label: 'Fundamentals',
              to: 'build/fundamentals/cryptography',
            },
            {
              label: 'Exchange Integration',
              to: 'build/exchange-integration/exchange-integration-guide',
            },
            {
              label: 'Tutorials',
              to: 'build/tutorials/twitch',
            },
          ],
        },
        {
          title: 'WIKI',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Github',
              href: 'https://github.com/iota-community/iota-wiki',
            },
            {
              label: 'Editor Github',
              href: 'https://github.com/jlvandenhout/docusaurus-plugin-docs-editor',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Contribute',
              to: 'participate/contribute-to-wiki/welcome',
            },
            {
              label: 'Impressum',
              to: 'https://www.iota.org/impressum',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.iota.org/privacy-policy',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'IOTA Logo',
      //   src: 'img/iota_logo.svg',
      //   href: 'https://www.iota.org',
      // },
      copyright: `© ${new Date().getFullYear()} TNTT Wiki. Built with Docusaurus.`,
    },
    socials: [
      {
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.iota.org/',
        backgroundColor: '#4B576F',
      },
      {
        url: 'https://www.twitter.com/iota/',
        backgroundColor: '#6A768E',
      },
      {
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      },
      {
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      '@jlvandenhout/docusaurus-plugin-docs-editor',
      {
        docs: {
          // The path to the docs section in your repository
          path: 'internal',
          // The username that owns the docs, defaults to siteConfig.organizationName
          owner: 'iota-community',
          // The repository that contains the docs, defaults to siteConfig.projectName
          repo: 'iota-wiki',
        },
        // GitHub OAuth Application settings
        github: {
          // REQUIRED - The Client ID you got from the GitHub OAuth App setup
          clientId: '30a8f5a21215004e81ca',
          // REQUIRED - The plugin will append the authorization code to this URL
          tokenUrl:
            'https://iota-wiki-github-oauth-login.iotaledger.workers.dev',
          // The request method to use (GET or POST), defaults to GET
          method: 'POST',
        },
      },
    ],
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-hotjar',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'participate',
        path: 'internal/participate',
        routeBasePath: 'participate',
        sidebarPath: require.resolve('./internal/participate/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'internal/build',
        routeBasePath: 'build',
        sidebarPath: require.resolve('./internal/build/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
        [
      "@docusaurus/plugin-content-docs",
      {
        id: "bee",
        path: "external/bee/documentation/docs",
        routeBasePath: "bee",
        sidebarPath: require.resolve("./external/bee/documentation/sidebars.js"),
        remarkPlugins: [require("remark-code-import"), require("remark-import-partial")],
        editUrl: 'https://github.com/iotaledger/bee/edit/dev',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "chrysalis-docs",
        path: "external/chrysalis-docs/docs",
        routeBasePath: "chrysalis-docs",
        sidebarPath: require.resolve("./external/chrysalis-docs/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/chrysalis-docs/edit/main',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "goshimmer",
        path: "external/goshimmer/documentation/docs",
        routeBasePath: "goshimmer",
        sidebarPath: require.resolve("./external/goshimmer/documentation/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/goshimmer/edit/develop',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "hornet",
        path: "external/hornet/documentation/docs",
        routeBasePath: "hornet",
        sidebarPath: require.resolve("./external/hornet/documentation/sidebars.js"),
        editUrl: 'https://github.com/gohornet/hornet/edit/mainnet',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "identity-rs",
        path: "external/identity.rs/documentation/docs",
        routeBasePath: "identity.rs",
        sidebarPath: require.resolve("./external/identity.rs/documentation/sidebars.js"),
        remarkPlugins: [require("remark-code-import"), require("remark-import-partial"), require('remark-remove-comments') ],
        editUrl: 'https://github.com/iotaledger/identity.rs/edit/dev',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "IOTA-Research-Specifications",
        path: "external/IOTA-2.0-Research-Specifications",
        routeBasePath: "IOTA-2.0-Research-Specifications",
        sidebarPath: require.resolve("./external/IOTA-2.0-Research-Specifications/sidebars.js"),
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex')],
        editUrl: 'https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main',
        breadcrumbs: false,
       }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "iota-rs",
        path: "external/iota.rs/documentation/docs",
        routeBasePath: "iota.rs",
        sidebarPath: require.resolve("./external/iota.rs/documentation/sidebars.js"),
        remarkPlugins: [require("remark-code-import"), require("remark-import-partial")],
        editUrl: 'https://github.com/iotaledger/iota.rs/edit/mainnet',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "stronghold-rs",
        path: "external/stronghold.rs/documentation/docs",
        routeBasePath: "stronghold.rs",
        sidebarPath: require.resolve("./external/stronghold.rs/documentation/sidebars.js"),
        remarkPlugins: [require("remark-code-import"), require("remark-import-partial")],
        editUrl: 'https://github.com/iotaledger/stronghold.rs/edit/dev',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wallet-rs",
        path: "external/wallet.rs/documentation/docs",
        routeBasePath: "wallet.rs",
        sidebarPath: require.resolve("./external/wallet.rs/documentation/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/wallet.rs/edit/mainnet',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "smart-contracts",
        path: "external/wasp/documentation/docs",
        routeBasePath: "smart-contracts",
        sidebarPath: require.resolve("./external/wasp/documentation/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/wasp/edit/develop',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "streams",
        path: "external/streams/documentation/docs",
        routeBasePath: "streams",
        sidebarPath: require.resolve("./external/streams/documentation/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/streams/edit/develop',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "chronicle",
        path: "external/chronicle.rs/documentation/docs",
        routeBasePath: "chronicle.rs",
        sidebarPath: require.resolve("./external/chronicle.rs/documentation/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/chronicle.rs/edit/main',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "blueprints",
        path: "external/blueprints/",
        routeBasePath: "blueprints",
        sidebarPath: require.resolve("./external/blueprints/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/blueprints/edit/main',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "integration-services",
        path: "external/integration-services/documentation/docs",
        routeBasePath: "integration-services",
        sidebarPath: require.resolve("./external/integration-services/documentation/sidebars.js"),
        editUrl: 'https://github.com/iotaledger/integration-services/edit/develop',
        breadcrumbs: false,
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "zebra-tutorials",
        path: "external/zebra-iota-edge-sdk/docs",
        routeBasePath: "zebra-iota-edge-sdk",
        sidebarPath: require.resolve("./external/zebra-iota-edge-sdk/docs/sidebars.js"),
        editUrl: 'https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main',
        breadcrumbs: false,
      }
    ],

  ],
};
