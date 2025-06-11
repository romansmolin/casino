import { gql } from '@apollo/client'

export const GET_SIDEBAR_MENU = gql`
    query GetMenu($locale: String) {
        getMenu(locale: $locale) {
            sections {
                title
                isActive
                menuLink {
                    type
                    title
                    casinosCategory {
                        slug
                    }
                    bonusCategory {
                        slug
                    }
                }
            }
        }
    }
`
