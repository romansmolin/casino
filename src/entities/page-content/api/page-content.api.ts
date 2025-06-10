import { getServerQuery } from '@/shared/lib/apollo-client'
import { GET_PAGE_CONTENT_BY_SLUG, GET_PAGE_SEO_BY_SLUG } from '../model/page-content.schemas'
import { Locale } from '@/shared/lib/i18n/routing'
import { ApiError, handleError } from '@/shared/utils/error-handler'
import { PageContentResponse, PageSeoInfoResponse } from '../model/page-content.types'

export const fetchPageContentBySlug = async (slug: string, locale: Locale): Promise<PageContentResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_PAGE_CONTENT_BY_SLUG, { slug, locale })

        if (error) {
            return {
                pageContent: null,
                error: handleError(error, 'fetchPageContentBySlug'),
            }
        }

        return {
            pageContent: data?.getPageContentBySlug.pageContent || null,
            error: null,
        }
    } catch (err) {
        return {
            pageContent: null,
            error: handleError(err, 'fetchPageContentBySlug'),
        }
    }
}

export const fetchPageSeoInfoBySlug = async (slug: string, locale: Locale): Promise<PageSeoInfoResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_PAGE_SEO_BY_SLUG, { slug, locale })

        if (error) {
            return {
                title: null,
                description: null,
                keywords: null,
                error: handleError(error, 'fetchPageSeoInfoBySlug'),
            }
        }

        return {
            title: data?.getPageSeoInfoBySlug?.title || null,
            description: data?.getPageSeoInfoBySlug?.description || null,
            keywords: data?.getPageSeoInfoBySlug?.keywords || null,
            error: null,
        }
    } catch (err) {
        return {
            title: null,
            description: null,
            keywords: null,
            error: handleError(err, 'fetchPageSeoInfoBySlug'),
        }
    }
}
