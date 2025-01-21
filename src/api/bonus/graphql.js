'use strict';

const { getAllBonuses, getBonusesByType, getBonusById } = require("../../services/bonus/bonusService");

module.exports = (strapi) => ({ nexus }) => ({
    typeDefs: `
        type GetAllBonuses {
            bonuses: [Bonus]
            totalPages: Int
        }

        type GetBonusesByType {
            bonuses: [Bonus]
            totalPages: Int
        }

        type GetBonusById {
            bonus: Bonus
        }

        type Bonus {
            casinoName: String,
            casinoUuid: String
            casinoLogo: String
            bonusSubtitle: String
            bonusTitle: String
            info: BonusInfo
            faqInfo: [FaqItem]
            bonusReview: [BonusDetails]
            uuid: String
            bonusTypeForUrl: [String]
        }
        
        type BonusDetails {
            type: String
            children: [BonusText]
        }

        type BonusText {
            type: String
            text: String
            bold: Boolean
        }

        type FaqItem {
            text: String
            label: String
        }

        type BonusInfo {
            releaseDate: String,
            availableFor: [String],
            bonusType: [String],
            bonusStatus: String
        }

        extend type Query {
            getAllBonuses(page: Int!, number: Int!): GetAllBonuses  
            getBonusesByType(page: Int!, number: Int!, type: String!): GetBonusesByType
            getBonusById(uuid: String!): GetBonusById
        }
    `,
    resolvers: {
        Query: {
            getAllBonuses: {
                resolve: async (parent, args) => {
                    return getAllBonuses(args);
                }
            },
            getBonusesByType: {
                resolve: async (parent, args) => {
                    return getBonusesByType(args);
                }
            },
            getBonusById: {
                resolve: async (parent, args) => {
                    const { uuid } = args;
                    return getBonusById(uuid);
                }
            }
        }
    },
    resolversConfig: {
        "Query.getAllBonuses": {
            auth: false,
        },
        "Query.getBonusesByType": {
            auth: false,
        },
        "Query.getBonusById": {
            auth: false,
        },
    }
});
