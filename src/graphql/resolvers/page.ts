"use strict";

import { getPageContentBySlug } from "../../services/page-service";

export default {
  Query: {
    getPageContentBySlug: {
      resolve: async (parent: any, args: any) => {
        return getPageContentBySlug(args.slug, args.locale);
      },
    },
  },
};
