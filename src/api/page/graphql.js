'use strict'

module.exports = (strapi) => () => ({
    typeDefs: `
        type GetBonusTopPage {
            bonusTopPage: String
        }
        
        extend type Query {
            getBonusTopPage(slug: String!): GetBonusTopPage        
        }
    `,
    resolvers: {
        Query: {
            getBonusTopPage: {
                resolve: async (parent, args) => {
                    try {
                        const data = await strapi.services["api::page.page"].find()
                        const { slug } = args
                        const bonusTop = data.results.find(page => page.slug === slug)
                        console.log('DATA: ', bonusTop)

                        return {
                            bonusTopPage: bonusTop.title
                        }
                    } catch (err) {
                        return {
                            bonusTopPage: 'ERROR'
                        }
                    }
                }
            }
        }
    },
    resolversConfig: {
        "Query.getBonusTopPage": {
            auth: false,
        },
    }
})