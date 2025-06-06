"use strict";

export default `
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
`;
