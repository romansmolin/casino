'use strict'

module.exports = (strapi) => () => ({
    typeDefs: `
        type GetPageContentBySlug {
            pageContent: [PageContent]
        }

        type PageContent {
            image: String
            content: [PageDetails]
        }

        type PageDetails {
            type: String
            children: [PageText]
        }

        type PageText {
            type: String
            text: String
            bold: Boolean
        }
        
        extend type Query {
            getPageContentBySlug(slug: String!): GetPageContentBySlug        
        }
    `,
    resolvers: {
        Query: {
            getPageContentBySlug: {
                resolve: async (parent, args) => {
                    try {
                        const pages = await strapi.services["api::page.page"].find({
                            populate: ['dynamicContent', 'dynamicContent.image', 'dynamicContent.fact1']
                        })

                        const { slug } = args
                        const page = pages.results.find(page => page.slug === slug)

                        console.log(page.dynamicContent)
                        const processedPageContent = page.content.map(pageContentBlock => ({
                            content: pageContentBlock.text,
                            image: pageContentBlock?.image?.url
                        }))

                        return {
                            pageContent: processedPageContent
                        }

                    } catch (err) {
                        console.error('Error fetching page content by slug:', err);
                        throw new Error('Error fetching page content');
                    }
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