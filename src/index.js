'use strict';

const graphql = require('./graphql/graphql')

module.exports = {
  register({strapi}) {
    graphql(strapi)
  }
}