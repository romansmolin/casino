import { gql } from "@apollo/client";

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
        }
        faqs {
          label
          text
        }
      }
    }
  }
}
`;