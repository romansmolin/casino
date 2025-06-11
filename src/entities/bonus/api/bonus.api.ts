import { getServerQuery } from '@/shared/lib/apollo-client'
import {
    GET_ALL_BONUSES_WITHOUT_PAGINATION,
    GET_BONUS_BY_SLUG,
    GET_BONUS_BY_UUID,
    GET_BONUS_CATEGORY_BY_SLUG,
    GET_BONUSES_BY_TYPE,
    GET_SEO_INFO_BY_BONUS_SLUG,
} from '../model/bonus.schema'
import { Locale } from '@/shared/lib/i18n/routing'
import { ApiError, handleError } from '@/shared/utils/error-handler'
import {
    Bonus,
    BonusByIdResponse,
    BonusBySlugResponse,
    BonusesByTypeResponse,
    BonusesWithoutPaginationResponse,
} from '../model/bonus.types'

interface SeoInfoResponse {
    title: string | null
    description: string | null
    error: ApiError | null
    keywords: string[] | null
}

export const fetchBonusesByType = async (
    page: number,
    number: number,
    type: string,
    locale: Locale
): Promise<BonusesByTypeResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_BONUSES_BY_TYPE, { page, number, type, locale })

        if (error) {
            return {
                bonuses: [],
                totalPages: 0,
                error: handleError(error, 'fetchBonusesByType'),
            }
        }

        return {
            bonuses: data?.getBonusesByType.bonuses || [],
            totalPages: data?.getBonusesByType.totalPages || 0,
            error: null,
        }
    } catch (err) {
        return {
            bonuses: [],
            totalPages: 0,
            error: handleError(err, 'fetchBonusesByType'),
        }
    }
}

export const fetchBonusById = async (id: string, locale: Locale): Promise<BonusByIdResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_BONUS_BY_UUID, { uuid: id, locale })

        if (error) {
            return {
                bonus: null,
                error: handleError(error, 'fetchBonusById'),
            }
        }

        return {
            bonus: data?.getBonusById.bonus || null,
            error: null,
        }
    } catch (err) {
        return {
            bonus: null,
            error: handleError(err, 'fetchBonusById'),
        }
    }
}

export const fetchAllBonusesWithoutPagination = async (
    locale: string
): Promise<BonusesWithoutPaginationResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_ALL_BONUSES_WITHOUT_PAGINATION, { locale })

        if (error) {
            return {
                bonuses: [],
                error: handleError(error, 'fetchAllBonusesWithoutPagination'),
            }
        }

        return {
            bonuses: data?.getAllBonusesWithoutPagination.bonuses || [],
            error: null,
        }
    } catch (err) {
        return {
            bonuses: [],
            error: handleError(err, 'fetchAllBonusesWithoutPagination'),
        }
    }
}

export const fetchSeoInfoByBonusSlug = async (slug: string, locale: string): Promise<SeoInfoResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_SEO_INFO_BY_BONUS_SLUG, { slug, locale })

        if (error) {
            return {
                title: null,
                description: null,
                keywords: null,
                error: handleError(error, 'fetchSeoInfoByBonusSlug'),
            }
        }

        return {
            title: data?.getBonusSeoInfoBySlug?.title || null,
            description: data?.getBonusSeoInfoBySlug?.description || null,
            keywords: data?.getBonusSeoInfoBySlug?.keywords || null,
            error: null,
        }
    } catch (err) {
        return {
            title: null,
            description: null,
            keywords: null,
            error: handleError(err, 'fetchSeoInfoByBonusSlug'),
        }
    }
}

export const fetchBonusBySlug = async (
    slug: string,
    locale: string
): Promise<{ bonus: Bonus | null; error: ApiError | null }> => {
    try {
        const { data, error } = await getServerQuery(GET_BONUS_BY_SLUG, { slug, locale })

        if (error) {
            return {
                bonus: null,
                error: handleError(error, 'fetchBonusBySlug'),
            }
        }

        return {
            bonus: data?.getBonusBySlug?.bonus || null,
            error: null,
        }
    } catch (err) {
        return {
            bonus: null,
            error: handleError(err, 'fetchBonusBySlug'),
        }
    }
}

export const fetchBonusCategoryBySlug = async (
    slug: string,
    locale: string
): Promise<BonusBySlugResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_BONUS_CATEGORY_BY_SLUG, { slug, locale })

        if (error) {
            return {
                title: null,
                description: null,
                keywords: null,
                categoryBonusType: null,
                error: handleError(error, 'fetchBonusCategoryBySlug'),
            }
        }

        return {
            title: data?.getBonusCategoryBySlug?.seo.title || null,
            description: data?.getBonusCategoryBySlug?.seo.description || null,
            keywords: data?.getBonusCategoryBySlug?.seo.keywords || null,
            categoryBonusType: data?.getBonusCategoryBySlug?.bonusCategoryType.bonusType[0] || null,
            error: null,
        }
    } catch (err) {
        return {
            title: null,
            description: null,
            keywords: null,
            categoryBonusType: null,
            error: handleError(err, 'fetchBonusCategoryBySlug'),
        }
    }
}
