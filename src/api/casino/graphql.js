'use strict';

const { getCasinoByUUID } = require("../../services/casino/casinosService");

module.exports = (strapi) => ({ nexus }) => ({
    typeDefs: `
        type GetCasinoByUUID {
          id: Int
          name: String
          bonus_title: String
          logoUrl: String
          features: [String]
          rating: Int
          review: [ReviewDetails]
          promos: [Promo]
          faq: [FaqItem]
        }

        type FaqItem {
            text: String
            label: String
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

        extend type Query {
            getCasinoByUUID(uuid: String!): GetCasinoByUUID        
        }
    `,
    resolvers: {
        Query: {
            getCasinoByUUID: {
                resolve: async (parent, args, context) => {
                    return getCasinoByUUID(args.uuid)
                },
            },
        },
    },
    resolversConfig: {
        "Query.getCasinoByUUID": {
            auth: false,
          },
    }
})