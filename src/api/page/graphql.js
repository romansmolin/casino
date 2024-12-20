'use strict'

const { getPageContentBySlug } = require("../../services/page/pagesService");


module.exports = (strapi) => () => ({
    typeDefs: `
        type GetPageContentBySlug {
            pageContent: [PageContent]
        }

        type PageContent {
            type: String
            content: [PageDetails]
            image: Image
            position: String
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
        }

        type FAQItem {
            label: String
            text: String
        }

        extend type Query {
            getPageContentBySlug(slug: String!): GetPageContentBySlug        
        }
    `,
    resolvers: {
        Query: {
            getPageContentBySlug: {
                resolve: async (parent, args) => {
                  return getPageContentBySlug(args.slug)
                }
              }
        }
    },
    resolversConfig: {
        "Query.getPageContentBySlug": {
            auth: false,
        },
    }
})