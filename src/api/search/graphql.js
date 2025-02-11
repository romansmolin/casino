'use strict'

const { globalSearch } = require("../../services/search/searchService")

module.exports = (strapi) => () => ({
    typeDefs: `
        type CasinoSearchResult {
            casinoName: String!
            casinoUuid: String!
        }

        type BonusSearchResult {
            bonusTitle: String!,
            bonusUuid: String!,
            casinoName: String!,
            primaryBonusType: String!
        }

        type GlobalSearch {
            casinoSearchResult: [CasinoSearchResult]
            bonusSearchResult: [BonusSearchResult]
        }

        extend type Query {
            globalSearch(query: String!, locale: String!): GlobalSearch
        }
    `,
    resolvers: {
        Query: {
            globalSearch: {
                resolve: async (parent, args) => {
                    return globalSearch(args.query, args.locale)// Replace with actual data fetching logic
                }
            }
        }
    },
    resolversConfig: {
        "Query.globalSearch": {
            auth: false,
        },
    }
})
