'use strict';

import top from '../api/top/graphql.js';
import casino from '../api/casino/graphql.js';
import bonuses from '../api/bonus/graphql.js';
import pages from '../api/page/graphql.js';
import globalSearch from '../api/search/graphql.js';
import newsletter from '../api/newsletter/graphql.js';
import nodemailer from '../api/nodemailer/graphql.js';

const extensions = [top, casino, bonuses, pages, globalSearch, newsletter, nodemailer];

export default (strapi) => {
  const extensionService = strapi.plugin('graphql').service('extension');

  for (const extension of extensions) {
    extensionService.use(extension(strapi));
  }
};