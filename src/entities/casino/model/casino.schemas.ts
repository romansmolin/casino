import { gql } from '@apollo/client'

export const CASINO_TOP_BY_COUNTRY = gql`
    query GetTopByCountryName($country: String!, $locale: String!) {
        getTopByCountryName(country: $country, locale: $locale) {
            topList {
                hasRegularOffers
                mainBonusTitle
                rating
                title
                logo
                hasVIPProgram
                hasLiveChat
                hasLiveCasino
                slug
            }
        }
    }
`

export const CASINO_TOP_BY_SLUG = gql`
    query GetTopPageBySlug($slug: String!, $locale: String!) {
        getTopPageBySlug(slug: $slug, locale: $locale) {
            top {
                topList {
                    title
                    slug
                    rating
                    mainBonusTitle
                    logo
                    hasVIPProgram
                    hasRegularOffers
                    hasLiveChat
                    hasLiveCasino
                }
            }
            slug
            pageTitle
        }
    }
`

export const CASINO_BY_UUID = gql`
    # Write your query or mutation here
    query GetCasinoByID($uuid: String!, $locale: String!) {
        getCasinoByUUID(uuid: $uuid, locale: $locale) {
            name
            bonus_title
            logoUrl
            features
            rating
            casinoType
            allowedCountries
            allowedCurrencies
            slug
            affiliateLink
            review {
                type
                level
                children {
                    type
                    text
                    bold
                    url
                    children {
                        text
                    }
                }
            }
            faq {
                text
                label
            }
            mainBonus {
                bonusLink
                bonus {
                    uuid
                    primaryBonusType
                }

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
        }
    }
`

export const CASINOS_BY_TYPE = gql`
    query GetCasinosByType(
        $casinoType: String!
        $locale: String!
        $page: Int!
        $number: Int!
    ) {
        getCasinosByType(
            casinoType: $casinoType
            locale: $locale
            page: $page
            number: $number
        ) {
            totalPages
            casinos {
                id
                name
                bonus_title
                logoUrl
                features
                rating
                slug
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
                affiliateLink
            }
        }
    }
`

export const CASINO_BY_SLUG = gql`
    query GetCasinoBySlug($slug: String!, $locale: String!) {
        getCasinoBySlug(slug: $slug, locale: $locale) {
            name
            mainBonus {
                bonus {
                    uuid
                    primaryBonusType
                }
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
            allowedCountries
            allowedCurrencies
            bonus_title
            casinoType
            faq {
                label
                text
            }
            features
            id
            logoUrl
            rating
            review {
                type
                level
                format
                image {
                    url
                }
                children {
                    bold
                    children {
                        text
                        type
                        bold
                    }
                    text
                    type
                    url
                }
            }
            slug
            affiliateLink
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

export const GET_CASINO_SEO_INFO_BY_SLUG = gql`
    query GetCasinoSeoInfoBySlug($locale: String!, $slug: String!) {
        getCasinoSeoInfoBySlug(locale: $locale, slug: $slug) {
            description
            title
            keywords
        }
    }
`
export const GET_CASINO_CATEGORY_BY_SLUG = gql`
    query GetCasinoCategoryBySlug($slug: String!, $locale: String) {
        getCasinoCategoryBySlug(slug: $slug, locale: $locale) {
            slug
            seo {
                title
                keywords
                description
            }
            casinoCategoryType {
                casinoType
            }
            pageTitle
        }
    }
`

export const GET_ALL_CASINOS_CATEGORIES = gql`
    query GetAllCasinosCategories($locale: String!) {
        getAllCasinosCategories(locale: $locale) {
            title
            slug
            coverImage
        }
    }
`
export const GET_ALL_CASINO_TOPS = gql`
    query GetAllTops($locale: String!) {
        getAllTops(locale: $locale) {
            slug
        }
    }
`
