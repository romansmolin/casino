import { getServerQuery } from "@/shared/lib/apollo-client"
import { GET_PAGE_CONTENT_BY_SLUG } from "../model/page-content.schemas"

export const fetchPageContentBySlug = async (slug: string): Promise<{ pageContent: any, error: any }> => {
    const { data, error } = await getServerQuery(GET_PAGE_CONTENT_BY_SLUG, { slug })
    return {
        pageContent: data.getPageContentBySlug.pageContent,
        error
    }
}

