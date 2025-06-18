import { gql } from '@apollo/client'

export const GET_PAGE_CONTENT_BY_SLUG = gql`
    query GetPageContentBySlug($slug: String!, $locale: String!) {
        getPageContentBySlug(slug: $slug, locale: $locale) {
            pageContent {
                content {
                    children {
                        url
                        type
                        text
                        children {
                            bold
                            text
                            type
                        }
                        bold
                    }
                    faqs {
                        text
                        label
                    }
                    type
                    format
                }
                image {
                    url
                }
                imageBackgroundColor
                position
                type
                badge
                actionButton {
                    title
                    link
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

// This query is required for sitemap generation
export const GET_ALL_PAGES = gql`
    query GetAllPages($locale: String!) {
        getAllPages(locale: $locale) {
            slug
        }
    }
`
