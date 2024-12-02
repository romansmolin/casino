import { gql } from "@apollo/client";

export const CASINO_TOP_BY_COUNTRY = gql`
  query GetCasinoTopByCountry($country: String!) {
    getTopByCountryName(country: $country) {
      id
      country
      top_list {
        rating
        title
        main_bonus_title
        hasRegularOffers
        hasLiveCasino
        hasVIPProgram
        hasLiveChat
        logo
        casino
      }
    }
  }
`;

export const GET_CASINO_BY_UUID = gql`
query GetCasinoByID($uuid: String!) {
  getCasinoByUUID(uuid: $uuid) {
    name
    bonus_title
    logoUrl
    features
    rating
    review {
      type
      children {
        type
        text
        bold
      }
    }
    promos {
      bonus_title
      bonus_subtitle
      bonus_link
      bonus_img
    }
  }
}
`;
