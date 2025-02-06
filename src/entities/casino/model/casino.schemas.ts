import { gql } from '@apollo/client'

export const CASINO_TOP_BY_COUNTRY = gql`
    query GetCasinoTopByCountry($country: String!, $locale: String!) {
        getTopByCountryName(country: $country, locale: $locale) {
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
`

export const CASINO_BY_UUID = gql`
    query GetCasinoByID($uuid: String!, $locale: String!) {
        getCasinoByUUID(uuid: $uuid, locale: $locale) {
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
            faq {
                text
                label
            }
            mainBonus {
                bonusLink
                info {
                    type
                    children {
                        type
                        text
                        bold
                    }
                }
            }
        }
    }
`

export const CASINOS_BY_TYPE = gql`
    query GetCasinosByType($casinoType: String!, $locale: String!) {
        getCasinosByType(casinoType: $casinoType, locale: $locale) {
            totalPages
            casinos {
                id
                name
                bonus_title
                logoUrl
                features
                rating
                mainBonus {
                    bonusLink
                    info {
                        type
                        children {
                            type
                            text
                            bold
                        }
                    }
                }
                casinoType
                uuid
            }
        }
    }
`

export const GET_ALL_CASINOS_WITHOUT_PAGINATION = gql`
    query GetAllCasinosWithoutPagination($locale: String!) {
        getAllCasinosWithoutPagination(locale: $locale) {
            casinos {
                name
                uuid
            }
        }
    }
`
