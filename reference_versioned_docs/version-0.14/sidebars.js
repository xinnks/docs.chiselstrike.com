/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  referenceSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction'
    },
    {
      type: 'category',
      label: 'Data modeling',
      link: {
        type: 'doc',
        id: 'data-modeling/index',
      },
      items: [
        'data-modeling/entity-basics',
        'data-modeling/relationships',
        'data-modeling/uniqueness',
        'data-modeling/migration',
      ]
    },
    {
      type: 'category',
      label: 'Entity CRUD API',
      link: {
        type: 'doc',
        id: 'entity-crud-api/index',
      },
      items: [
        'entity-crud-api/supported-http-methods',
        'entity-crud-api/optionals-defaults-required',
        'entity-crud-api/filter-order-limit-query',
        'entity-crud-api/relationships',
      ]
    },
    {
      type: 'category',
      label: 'Routing',
      link: {
        type: 'doc',
        id: 'routing/index',
      },
      items: [
        'routing/definition',
        'routing/response',
        'routing/placeholders',
        'routing/advanced-route-definitions',
        'routing/entity-crud',
      ]
    },
    {
      type: 'category',
      label: 'Entity TypeScript API',
      link: {
        type: 'doc',
        id: 'entity-ts-api/index',
      },
      items: [
        'entity-ts-api/create-data',
        'entity-ts-api/read-data',
        'entity-ts-api/update-data',
        'entity-ts-api/delete-data',
        'entity-ts-api/query-cursors',
        'entity-ts-api/matching-entities',
        'entity-ts-api/transactions',
      ]
    },
    'routes',
    'streaming',
    'debugging',
    'pol',
    'secrets',
    'versions',
    'login',
    'chisel-cli',
  ],
};

module.exports = sidebars;
