"use strict";

import { globalSearch } from "../../services/search-service";

export default {
  Query: {
    globalSearch: {
      resolve: async (parent: any, args: any) => {
        return globalSearch(args.query, args.locale);
      },
    },
  },
};
