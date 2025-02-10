
const processImage = (image) => ({
    url: image?.url || '',
});

const processFAQ = (faqBlock) => (
    faqBlock?.fact1?.map(fact => ({
      label: fact.label,
      text: fact.text
  })))
  
const pageContentSectionMapper = (contentBlock) => ({    
        type: 'contentSection',
        image: contentBlock.image ? processImage(contentBlock.image) : null,
        content: contentBlock.text,
        position: contentBlock.position,
        imageBackgroundColor: contentBlock.imageBackgroundColor[0]
})


const pageFaqSectionMapper = (faqBlock) => ({
    type: 'faq',
    image: null, 
    content: [{
      faqs: processFAQ(faqBlock)
    }]
})

module.exports = {
    pageContentSectionMapper,
    pageFaqSectionMapper
}