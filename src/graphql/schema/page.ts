"use strict";

export default `
    type GetPageContentBySlug {
        pageContent: [PageContent]
    }

    type PageContent {
        type: String
        content: [PageDetails]
        image: Image
        position: String
        imageBackgroundColor: String
    }

    type Image {
        url: String
    }

    type PageDetails {
        type: String
        children: [PageText]
        faqs: [FAQItem]
    }

    type PageText {
        type: String
        text: String
        bold: Boolean
        url: String
        children: [ReviewTextChildren]
    }

    type ReviewTextChildren {
      text: String
      type: String
    }

    type FAQItem {
        label: String
        text: String
    }

    extend type Query {
        getPageContentBySlug(slug: String!, locale: String!): GetPageContentBySlug        
    }
`;
