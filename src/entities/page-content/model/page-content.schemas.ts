import { gql } from '@apollo/client'

export const GET_PAGE_CONTENT_BY_SLUG = gql`
    query GetPageContentBySlug($slug: String!, $locale: String!) {
        getPageContentBySlug(slug: $slug, locale: $locale) {
            pageContent {
                type
                image {
                    url
                }
                position
                imageBackgroundColor
                content {
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
                    faqs {
                        label
                        text
                    }
                }
            }
        }
    }
`

export const GET_PAGE_SEO_BY_SLUG = gql`
    query GetPageSeoInfoBySlug($slug: String!, $locale: String!) {
        getPageSeoInfoBySlug(slug: $slug, locale: $locale) {
            title
            keywords
            description
        }
    }
`
