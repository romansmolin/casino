"use strict";

export default (strapi: any) => ({
  Query: {
    getTopByCountryName: {
      resolve: async (parent: any, args: any) => {
        const res = await strapi.service("api::top.top").find({
          locale: args.locale,
          populate: ["MainTop", "MainTop.logo", "MainTop.casino"],
        });

        const targetTop = res.results.filter(
          (top: any) => top.country === args.country,
        );

        const newMainTop = targetTop[0].MainTop.map((casino: any) => ({
          ...casino,
          casino: casino.casino.uuid,
          logo: casino.logo[0].url,
        }));

        return {
          country: targetTop[0].country,
          id: targetTop[0].id,
          top_list: newMainTop,
        };
      },
    },
  },
});
