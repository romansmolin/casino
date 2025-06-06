"use strict";

import { sendEmail } from "../../services/nodemailer-service";

export default {
  Mutation: {
    sendEmail: {
      resolve: async (parent: any, args: any) => {
        return sendEmail(args);
      },
    },
  },
};
