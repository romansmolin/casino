'use strict';

// NOTE: GraphQL plugin was removed during Strapi v5 migration
// To re-enable GraphQL functionality:
// 1. Install: npm install @strapi/plugin-graphql
// 2. Add to config/plugins.js: graphql: { enabled: true }
// 3. Uncomment the lines below

const graphql = require('./graphql/graphql')

module.exports = {
  register({strapi}) {
    graphql(strapi)
  }
}