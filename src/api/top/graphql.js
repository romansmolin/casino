'use strict';

module.exports = (strapi) => ({ nexus }) => ({
    typeDefs: `
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

        extend type Query {
            getTopByCountryName(country: String!, locale: String!): GetTopByCountryName
        }
  `,
    resolvers: {
        Query: {
            getTopByCountryName: {
                resolve: async (parent, args) => {

                    // const res = await strapi.entityService.findMany('api::top.top', {
                    //     populate: ['MainTop', 'MainTop.logo', 'MainTop.casino', 'localization'],
                    // })

                    const res = await strapi.service('api::top.top').find({
                        locale: args.locale,
                        populate: ['MainTop', 'MainTop.logo', 'MainTop.casino'],
                    })

                    const targetTop = res.results.filter(top => top.country === args.country)

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
        "Query.getTopByCountryName": {
            auth: false,
        },
    }
})