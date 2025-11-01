import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'e58'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '2ce'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '11b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'f13'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bff'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '830'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '13e'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'c78'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '6fa'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'e47'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'd42'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'b22'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
