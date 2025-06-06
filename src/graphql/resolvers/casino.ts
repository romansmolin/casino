"use strict";

import {
  getCasinoByUUID,
  getCasinosByType,
  getAllCasinosWithoutPagination,
} from "../../services/casino-service";

export default {
  Query: {
    getCasinoByUUID: {
      resolve: async (parent: any, args: any, context: any) => {
        return getCasinoByUUID(args.uuid, args.locale);
      },
    },
    getCasinosByType: {
      resolve: async (parent: any, args: any) => {
        return getCasinosByType(args);
      },
    },
    getAllCasinosWithoutPagination: {
      resolve: async (parent: any, args: any) => {
        return getAllCasinosWithoutPagination(args);
      },
    },
  },
};
