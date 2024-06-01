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
          promos: [Promo]
        }

        type Promo {
          bonus_title:  String
          bonus_subtitle: String
          bonus_link: String
          bonus_img: String
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
              try {
                const data = await strapi.services["api::casino.casino"].find({
                  populate: ['logo', 'Promos', 'Promos.Promo', 'Promos.Promo.bonus_img'],
                  filters: { uuid: args.uuid },
                });
          
                if (!data) {
                  throw new Error("Casino not found");
                }
          
                const promos = data.results[0].Promos.map(item => ({
                  bonus_title:  item.Promo.bonus_title,
                  bonus_subtitle: item.Promo.bonus_subtitle,
                  bonus_link: item.Promo.link,
                  bonus_img: item.Promo.bonus_img[0].url
                }));
          
                return {
                  id: data.results[0].id,
                  name: data.results[0].name,
                  bonus_title: data.results[0].bonus_title,
                  logoUrl: data.results[0].logo[0].url,
                  features: data.results[0].features,
                  rating: data.results[0].rating,
                  review: data.results[0].review,
                  promos: promos
                };
              } catch (error) {
                console.error("Error fetching casino data:", error);
                throw new Error("Failed to fetch casino data");
              }
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
