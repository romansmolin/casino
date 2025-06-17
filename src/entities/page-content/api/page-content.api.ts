import { getServerQuery } from '@/shared/lib/apollo-client'
import { Locale } from '@/shared/lib/i18n/routing'
import { ApiError, handleError } from '@/shared/utils/error-handler'

import {
    GET_ALL_PAGES,
    GET_PAGE_CONTENT_BY_SLUG,
    GET_PAGE_SEO_BY_SLUG,
} from '../model/page-content.schemas'
import {
    AllPagesResponse,
    PageContentResponse,
    PageSeoInfoResponse,
} from '../model/page-content.types'

export const fetchPageContentBySlug = async (
    slug: string,
    locale: Locale
): Promise<PageContentResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_PAGE_CONTENT_BY_SLUG, {
            slug,
            locale,
        })

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

export const fetchPageSeoInfoBySlug = async (
    slug: string,
    locale: Locale
): Promise<PageSeoInfoResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_PAGE_SEO_BY_SLUG, { slug, locale })

        if (error) {
            return {
                title: null,
                description: null,
                keywords: null,
                pageTitle: null,
                error: handleError(error, 'fetchPageSeoInfoBySlug'),
            }
        }

        return {
            title: data?.getPageSeoInfoBySlug?.title || null,
            description: data?.getPageSeoInfoBySlug?.description || null,
            keywords: data?.getPageSeoInfoBySlug?.keywords || null,
            pageTitle: null,
            error: null,
        }
    } catch (err) {
        return {
            title: null,
            description: null,
            keywords: null,
            pageTitle: null,
            error: handleError(err, 'fetchPageSeoInfoBySlug'),
        }
    }
}

export const fetchAllPages = async (locale: Locale): Promise<AllPagesResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_ALL_PAGES, {
            locale,
        })

        if (error) {
            return {
                pages: null,
                error: handleError(error, 'fetchAllPages'),
            }
        }

        return {
            pages: data?.getAllPages || null,
            error: null,
        }
    } catch (err) {
        return {
            pages: null,
            error: handleError(err, 'fetchAllPages'),
        }
    }
}
