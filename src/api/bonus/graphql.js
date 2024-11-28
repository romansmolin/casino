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
            casino_name: String,
            casino_uuid: String
            casino_logo: String
            bonus_subtitle: String
            bonus_title: String
            info: BonusInfo
            faqInfo: [FaqItem]
            bonusReview: [BonusDetails]
            uuid: String

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
            release_date: String,
            available_for: [String],
            bonus_type: [String],
            bonus_status: String
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
