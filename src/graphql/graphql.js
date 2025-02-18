'use strict';

const top = require('../api/top/graphql')
const casino = require('../api/casino/graphql')
const bonuses = require('../api/bonus/graphql')
const pages = require('../api/page/graphql')
const globalSearch = require('../api/search/graphql')
const newsletter = require('../api/newsletter/graphql')
const extensions = [top, casino, bonuses, pages, globalSearch, newsletter]

module.exports = (strapi) => {
  const extensionService = strapi.plugin('graphql').service('extension')

  for (const extension of extensions) {
    extensionService.use(extension(strapi))
  }
}