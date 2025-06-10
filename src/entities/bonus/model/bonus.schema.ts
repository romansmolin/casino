import { gql } from '@apollo/client'

export const GET_BONUSES_BY_TYPE = gql`
    query GetBonusesByType($page: Int!, $number: Int!, $type: String!, $locale: String!) {
        getBonusesByType(page: $page, number: $number, type: $type, locale: $locale) {
            bonuses {
                casinoName
                casinoUuid
                bonusSubtitle
                bonusTitle
                uuid
                slug
                casinoLogo
                primaryBonusType
                info {
                    releaseDate
                    availableFor
                    bonusType
                    bonusStatus
                }
            }
            totalPages
        }
    }
`

export const GET_ALL_BONUSES = gql`
    query GetBonuses($page: Int!, $number: Int!) {
        getAllBonuses(page: $page, number: $number) {
            bonuses {
                casinoName
                casinoUuid
                bonusSubtitle
                bonusTitle
                casinoLogo
                uuid
                slug
                info {
                    releaseDate
                    availableFor
                    bonusType
                    bonusStatus
                }
            }
            totalPages
        }
    }
`

export const GET_BONUS_BY_UUID = gql`
    query GetBonusById($uuid: String!, $locale: String!) {
        getBonusById(uuid: $uuid, locale: $locale) {
            bonus {
                casinoName
                casinoUuid
                bonusSubtitle
                bonusTitle
                casinoLogo
                primaryBonusType
                bonusReview {
                    type
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
                faqInfo {
                    label
                    text
                }
                info {
                    releaseDate
                    availableFor
                    bonusType
                    bonusStatus
                }
            }
        }
    }
`

// This thing is required for sitemap
export const GET_ALL_BONUSES_WITHOUT_PAGINATION = gql`
    query GetAllBonusesWithoutPagination($locale: String!) {
        getAllBonusesWithoutPagination(locale: $locale) {
            bonuses {
                casinoName
                uuid
                primaryBonusType
            }
        }
    }
`

export const GET_SEO_INFO_BY_BONUS_SLUG = gql`
    query GetBonusSeoInfoBySlug($slug: String!, $locale: String!) {
        getBonusSeoInfoBySlug(slug: $slug, locale: $locale) {
            title
            description
            keywords
        }
    }
`

export const GET_BONUS_BY_SLUG = gql`
    query GetBonusBySlug($slug: String!, $locale: String!) {
        getBonusBySlug(slug: $slug, locale: $locale) {
            bonus {
                casinoName
                uuid
                primaryBonusType
                info {
                    releaseDate
                    bonusType
                    bonusStatus
                    availableFor
                }
                casinoUuid
                casinoLogo
                bonusTitle
                bonusSubtitle
                bonusReview {
                    type
                    children {
                        url
                        type
                        text
                        children {
                            type
                            text
                        }
                        bold
                    }
                }
                faqInfo {
                    text
                    label
                }
            }
        }
    }
`
