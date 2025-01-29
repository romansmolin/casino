import { gql } from '@apollo/client'

export const GET_BONUSES_BY_TYPE = gql`
    query GetBonusesByType($page: Int!, $number: Int!, $type: String!) {
        getBonusesByType(page: $page, number: $number, type: $type) {
            bonuses {
                casinoName
                casinoUuid
                bonusSubtitle
                bonusTitle
                uuid
                casinoLogo
                bonusTypeForUrl
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
    query GetBonusById($uuid: String!) {
        getBonusById(uuid: $uuid) {
            bonus {
                casinoName
                casinoUuid
                bonusSubtitle
                bonusTitle
                casinoLogo
                bonusReview {
                    type
                    children {
                        type
                        text
                        bold
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
            }
        }
    }
`
