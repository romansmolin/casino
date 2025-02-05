const { pageContentSectionMapper, pageFaqSectionMapper } = require("../../mappers/page/pageMappers");

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

const getPageContentBySlug = async (slug, locale) => {
    try {

        const pages = await strapi.service("api::page.page").find({
          populate: ['dynamicContent', 'dynamicContent.image', 'dynamicContent.fact1'],
          locale
        })
  
        const page = pages.results.find(page => page.slug === slug);
  
        if (!page) {
          return {
            pageContent: null
          };
        }

        console.log('page.dynamicContent', page.dynamicContent);
  
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