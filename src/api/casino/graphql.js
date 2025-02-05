"use strict";

const {
  getCasinoByUUID,
  getCasinosByType,
  getAllCasinosWithoutPagination
} = require("../../services/casino/casinosService");

module.exports =
  (strapi) =>
  ({ nexus }) => ({
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
          mainBonus: MainBonus
          casinoType: [String]
        }

        type GetCasinoByType {
          casinos: [CasinoItem]
          totalPages: Int
        }

        type GetAllCasinosWithoutPagination {
          casinos: [CasinoItem]
        }

		type CasinoItem {
			id: Int
			name: String
			bonus_title: String
			logoUrl: String
			features: [String]
			rating: Int
			review: [ReviewDetails]
			promos: [Promo]
			faq: [FaqItem]
			mainBonus: MainBonus
			casinoType: [String]
      uuid: String
		}

        type MainBonus {
          bonusLink: String
          info: [ReviewDetails]
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
            getCasinoByUUID(uuid: String!, locale: String!): GetCasinoByUUID
			      getCasinosByType(casinoType: String!): GetCasinoByType        
            getAllCasinosWithoutPagination(locale: String!): GetAllCasinosWithoutPagination
        }
    `,
    resolvers: {
      Query: {
        getCasinoByUUID: {
          resolve: async (parent, args, context) => {
            return getCasinoByUUID(args.uuid, args.locale);
          },
        },
        getCasinosByType: {
          resolve: async (parent, args) => {
            return getCasinosByType(args);
          },
        },
        getAllCasinosWithoutPagination: {
          resolve: async (parent, args) => {
            return getAllCasinosWithoutPagination(args);
          }
        }
      },
    },
    resolversConfig: {
      "Query.getCasinoByUUID": {
        auth: false,
      },
      "Query.getCasinosByType": {
        auth: false,
      },
      "Query.getAllCasinosWithoutPagination": {
        auth: false,
      }
    },
  });
