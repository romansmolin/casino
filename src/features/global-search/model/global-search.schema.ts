import { gql } from '@apollo/client'

export const GLOBAL_SEARCH = gql`
    query GlobalSearch($locale: String!, $query: String!) {
        globalSearch(locale: $locale, query: $query) {
            casinoSearchResult {
                casinoName
                casinoUuid
            }
            bonusSearchResult {
                bonusUuid
                bonusTitle
                casinoName
                primaryBonusType
            }
        }
    }
`
