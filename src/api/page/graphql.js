'use strict'

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
                  try {
                    const pages = await strapi.services["api::page.page"].find({
                      populate: ['dynamicContent', 'dynamicContent.image', 'dynamicContent.fact1']
                    });
              
                    const { slug } = args;
                    const page = pages.results.find(page => page.slug === slug);
              
                    if (!page) {
                      throw new Error('Page not found');
                    }
              
                    const processImage = (image) => ({
                      url: image?.url || '',
                    });

                    const processFAQ = (faqBlock) => {
                        const faq = faqBlock?.fact1?.map(fact => ({
                            label: fact.label,
                            text: fact.text
                        }))

                        console.log('faqBlock: ', faq)

                        return faq   
                    }
              
                    const processedPageContent = page.dynamicContent.map(pageContentBlock => {
                      if (pageContentBlock.__component === 'content.content-section') {
                        console.log('pageContentBlock: ', pageContentBlock)
                        return {
                          type: 'contentSection',
                          image: pageContentBlock.image ? processImage(pageContentBlock.image) : null,
                          content: pageContentBlock.text,
                          position: pageContentBlock.position
                        };

                      } else if (pageContentBlock.__component === 'faq.faq') {
                        return {
                          type: 'faq',
                          image: null, // FAQs don't have an image
                          content: [{
                            faqs: processFAQ(pageContentBlock)
                          }]
                        };
                      }
              
                      return null;
                    }).filter(block => block !== null); // Filter out any null or undefined blocks
              
                    return {
                      pageContent: processedPageContent
                    };
              
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