const { pageContentSectionMapper, pageFaqSectionMapper } = require("../../mappers/page/pageMappers");


const getPageContentBySlug = async (slug) => {
    try {
        const pages = await strapi.services["api::page.page"].find({
          populate: ['dynamicContent', 'dynamicContent.image', 'dynamicContent.fact1']
        });
  
        const page = pages.results.find(page => page.slug === slug);
  
        if (!page) {
          throw new Error('Page not found');
        }
        
        const processedPageContent = (content) => (
          content.map(contentItem => {
            switch (contentItem.__component) {
              case 'content.content-section':
                return pageContentSectionMapper(contentItem)
              case 'faq.faq':
                return pageFaqSectionMapper(contentItem);
              default:
                return null; // Handle unknown types
            }
          }).filter(item => item !== null)
        )
  
        return {
          pageContent: processedPageContent(page.dynamicContent)
        };
  
      } catch (err) {
        console.error('Error fetching page content by slug:', err);
        throw new Error('Error fetching page content');
      }
}

module.exports = {
    getPageContentBySlug
}