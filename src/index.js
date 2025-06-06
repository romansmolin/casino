'use strict';

import graphql from './graphql/graphql';

export default {
  register({ strapi }) {
    graphql(strapi);
  }
};