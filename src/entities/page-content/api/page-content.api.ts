import { getServerQuery } from "@/shared/lib/apollo-client"
import { GET_PAGE_CONTENT_BY_SLUG } from "../model/page-content.schemas"
import { Locale } from "@/shared/lib/i18n/routing"

export const fetchPageContentBySlug = async (slug: string, locale: Locale): Promise<{ pageContent: any, error: any }> => {
    const { data, error } = await getServerQuery(GET_PAGE_CONTENT_BY_SLUG, { slug, locale })
    return {
        pageContent: data.getPageContentBySlug.pageContent,
        error
    }
}

