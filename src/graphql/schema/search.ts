"use strict";

export default `
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
`;
