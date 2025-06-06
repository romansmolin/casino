import {
  pageContentSectionMapper,
  pageFaqSectionMapper,
} from "../mappers/page-mappers";
import { findPagesByLocale } from "../repositories/page-repository";

const processedPageContent = (content: any) =>
  content
    .map((contentItem: any) => {
      switch (contentItem.__component) {
        case "content.content-section":
          return pageContentSectionMapper(contentItem);
        case "faq.faq":
          return pageFaqSectionMapper(contentItem);
        default:
          return null; // Handle unknown types
      }
    })
    .filter((item: any) => item !== null);

const getPageContentBySlug = async (slug: string, locale: string) => {
  try {
    const pages = await findPagesByLocale(locale);

    const page = pages.results.find((page: any) => page.slug === slug);

    if (!page) {
      return {
        pageContent: null,
      };
    }

    console.log("page.dynamicContent", page.dynamicContent);

    return {
      pageContent: processedPageContent(page.dynamicContent),
    };
  } catch (err) {
    console.error("Error fetching page content by slug:", err);
    throw new Error("Error fetching page content");
  }
};

export { getPageContentBySlug };
