"use strict";

import { signUpOnNewsletter } from "../../services/newsletter-service";

export default {
  Mutation: {
    signUpOnNewsletter: {
      resolve: async (parent: any, args: any) => {
        return signUpOnNewsletter(args.email);
      },
    },
  },
};
