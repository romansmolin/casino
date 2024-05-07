'use strict';

module.exports = {
  
  register({ strapi }) {   
    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: `
        type Query {
          getCasinoByUUID(uuid: String!): GetCasinoByUUID
          getTopByCountryName(country: String!): GetTopByCountryName
        }

        type GetCasinoByUUID {
          id: Int
          name: String
          bonus_title: String
          logoUrl: String
          features: [String]
          rating: Int
          review: [ReviewDetails]
        }

        type ReviewDetails {
          type: String
          children: [ReviewText]
        }

        type ReviewText {
          type: String
          text: String
          bold: Boolean
        }

        type GetTopByCountryName {
          id: String
          country: String
          top_list: [MainTopEntry]
        }
      
        type MainTopEntry {
          rating: Float
          title: String
          main_bonus_title: String
          hasRegularOffers: Boolean
          hasLiveCasino: Boolean
          hasVIPProgram: Boolean
          hasLiveChat: Boolean
          logo: String
          casino: String
        }
        
      `,
      resolvers: {
        Query: {
          getCasinoByUUID: {
            resolve: async (parent, args, context) => {
              const data = await strapi.services["api::casino.casino"].find({
                populate: ['logo'],
                filters: { uuid: args.uuid },
              });

              console.log(data.results[0].review[1].children)

              return {
                id: data.results[0].id,
                name: data.results[0].name,
                bonus_title: data.results[0].bonus_title,
                logoUrl: data.results[0].logo[0].url,
                features: data.results[0].features,
                rating: data.results[0].rating,
                review: data.results[0].review
              };
            },
          },
          getTopByCountryName: {
            resolve: async (parent, args, context) => {

              const res = await strapi.entityService.findMany('api::top.top', {
                populate: ['MainTop', 'MainTop.logo', 'MainTop.casino'],
              })

              const targetTop = res.filter(top => top.country === args.country)

              const newMainTop = targetTop[0].MainTop.map(casino => ({
                ...casino,
                casino: casino.casino.uuid,
                logo: casino.logo[0].url,
              }))

              return {
                country: targetTop[0].country,
                id: targetTop[0].id,
                top_list: newMainTop,
              }
            }
          }
        },
      },
      resolversConfig: {
        "Query.getCasinoByUUID": {
          auth: false,
        },
        "Query.getTopByCountryName": {
          auth: false,
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
