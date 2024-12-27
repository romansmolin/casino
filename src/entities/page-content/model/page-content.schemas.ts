import { gql } from "@apollo/client";

export const GET_PAGE_CONTENT_BY_SLUG = gql`
query GetPageContentBySlug($slug: String!) {
  getPageContentBySlug(slug: $slug) {
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