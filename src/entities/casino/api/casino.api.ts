import { cache } from 'react'

import { getServerQuery } from '@/shared/lib/apollo-client'
import { Locale } from '@/shared/lib/i18n/routing'
import { ApiError, handleError } from '@/shared/utils/error-handler'

import {
    CASINOS_BY_TYPE,
    CASINO_BY_SLUG,
    CASINO_BY_UUID,
    CASINO_TOP_BY_COUNTRY,
    CASINO_TOP_BY_SLUG,
    GET_ALL_CASINOS_CATEGORIES,
    GET_ALL_CASINOS_WITHOUT_PAGINATION,
    GET_ALL_CASINO_TOPS,
    GET_CASINO_CATEGORY_BY_SLUG,
    GET_CASINO_SEO_INFO_BY_SLUG,
} from '../model/casino.schemas'
import type {
    AllCasinoCategories,
    Casino,
    CasinoBySlugResponse,
    CasinoByUuidResponse,
    CasinoCategory,
    CasinoCategoryBySlugResponse,
    CasinoSeoInfoResponse,
    CasinoTopByCountryResponse,
    CasinoTopBySlugResponse,
    CasinosByTypeResponse,
    CasinosWithoutPaginationResponse,
} from '../model/casino.types'

export const fetchCasinoTopByCountry = async (
    country: string,
    locale: string
): Promise<CasinoTopByCountryResponse> => {
    try {
        const { data, error } = await getServerQuery(CASINO_TOP_BY_COUNTRY, {
            country,
            locale,
        })

        if (error) {
            return {
                topByCountry: null,
                error: handleError(error, 'fetchCasinoTopByCountry'),
            }
        }

        return {
            topByCountry: data?.getTopByCountryName.topList || null,
            error: null,
        }
    } catch (err) {
        return {
            topByCountry: null,
            error: handleError(err, 'fetchCasinoTopByCountryServer'),
        }
    }
}

export const fetchCasinoTopBySlug = async (
    slug: string,
    locale: string
): Promise<CasinoTopBySlugResponse> => {
    try {
        const { data, error } = await getServerQuery(CASINO_TOP_BY_SLUG, {
            slug,
            locale,
        })

        if (error) {
            return {
                top: null,
                pageTitle: null,
                error: handleError(error, 'fetchCasinoTopBySlug'),
            }
        }

        return {
            top: data?.getTopPageBySlug.top.topList || null,
            pageTitle: data?.getTopPageBySlug.pageTitle,
            error: null,
        }
    } catch (err) {
        return {
            top: null,
            pageTitle: null,
            error: handleError(err, 'fetchCasinoTopBySlug'),
        }
    }
}

export const fetchCasinoByUuid = async <T = Casino>(
    uuid: string,
    locale: string
): Promise<CasinoByUuidResponse<T>> => {
    try {
        const { data, error } = await getServerQuery(CASINO_BY_UUID, { uuid, locale })

        if (error) {
            return {
                casino: null,
                error: handleError(error, 'fetchCasinoByUuid'),
            }
        }

        return {
            casino: (data?.getCasinoByUUID as T) || null,
            error: null,
        }
    } catch (err) {
        return {
            casino: null,
            error: handleError(err, 'fetchCasinoByUuid'),
        }
    }
}

export const fetchCasinoByType = async ({
    page,
    number,
    casinoType,
    locale,
}: {
    page: number
    number: number
    casinoType: string
    locale: Locale
}): Promise<CasinosByTypeResponse> => {
    try {
        const normalizedPage = page || 1

        const { data, error } = await getServerQuery(CASINOS_BY_TYPE, {
            casinoType,
            page: normalizedPage,
            number,
            locale,
        })

        if (error) {
            return {
                casinos: null,
                totalPages: 0,
                error: handleError(error, 'fetchCasinoByType'),
            }
        }

        return {
            casinos: data?.getCasinosByType.casinos || null,
            totalPages: data?.getCasinosByType.totalPages || 0,
            error: null,
        }
    } catch (err) {
        return {
            casinos: null,
            totalPages: 0,
            error: handleError(err, 'fetchCasinoByType'),
        }
    }
}

export const getAllCasinosWithoutPagination = async (
    locale: Locale
): Promise<CasinosWithoutPaginationResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_ALL_CASINOS_WITHOUT_PAGINATION, {
            locale,
        })

        if (error) {
            return {
                casinos: null,
                error: handleError(error, 'getAllCasinosWithoutPagination'),
            }
        }

        return {
            casinos: data?.getAllCasinosWithoutPagination.casinos || null,
            error: null,
        }
    } catch (err) {
        return {
            casinos: null,
            error: handleError(err, 'getAllCasinosWithoutPagination'),
        }
    }
}

export const getCasinoBySlug = async (
    slug: string,
    locale: Locale
): Promise<CasinoBySlugResponse> => {
    try {
        const { data, error } = await getServerQuery(CASINO_BY_SLUG, { slug, locale })

        if (error) {
            return {
                casino: null,
                error: handleError(error, 'getCasinoBySlug'),
            }
        }

        return {
            casino: data?.getCasinoBySlug || null,
            error: null,
        }
    } catch (err) {
        return {
            casino: null,
            error: handleError(err, 'getCasinoBySlug'),
        }
    }
}

export const getCasinoSeoInfoBySlug = async (
    slug: string,
    locale: string
): Promise<CasinoSeoInfoResponse> => {
    try {
        const { data, error } = await getServerQuery(GET_CASINO_SEO_INFO_BY_SLUG, {
            slug,
            locale,
        })

        if (error) {
            return {
                title: null,
                description: null,
                keywords: null,
                error: handleError(error, 'getCasinoSeoInfoBySlug'),
            }
        }

        return {
            title: data?.getCasinoSeoInfoBySlug?.title || null,
            description: data?.getCasinoSeoInfoBySlug?.description || null,
            keywords: data?.getCasinoSeoInfoBySlug?.keywords || null,
            error: null,
        }
    } catch (err) {
        return {
            title: null,
            description: null,
            keywords: null,
            error: handleError(err, 'getCasinoSeoInfoBySlug'),
        }
    }
}

export const fetchCasinoCategoryBySlug = cache(
    async (slug: string, locale: Locale): Promise<CasinoCategoryBySlugResponse> => {
        try {
            const { data, error } = await getServerQuery(
                GET_CASINO_CATEGORY_BY_SLUG,
                { slug, locale },
                {
                    // revalidate: 3600,
                }
            )

            if (error) {
                return {
                    title: null,
                    description: null,
                    keywords: null,
                    categoryCasinoType: null,
                    pageTitle: null,
                    error: handleError(error, 'fetchBonusCategoryBySlug'),
                }
            }

            return {
                title: data?.getCasinoCategoryBySlug?.seo.title || null,
                description: data?.getCasinoCategoryBySlug?.seo.description || null,
                keywords: data?.getCasinoCategoryBySlug?.seo.keywords || null,
                categoryCasinoType:
                    data?.getCasinoCategoryBySlug?.casinoCategoryType.casinoType[0] || null,
                pageTitle: data?.getCasinoCategoryBySlug?.pageTitle || null,
                error: null,
            }
        } catch (err) {
            return {
                title: null,
                description: null,
                keywords: null,
                categoryCasinoType: null,
                pageTitle: null,
                error: handleError(err, 'fetchBonusCategoryBySlug'),
            }
        }
    }
)

export const fetchAllCasinoCategories = async (
    locale: Locale
): Promise<AllCasinoCategories> => {
    try {
        const { data, error } = await getServerQuery(GET_ALL_CASINOS_CATEGORIES, { locale })

        if (error) {
            return {
                error: handleError(error, 'fetchAllCasinoCategories'),
                categories: [],
            }
        }

        const preparedData = data.getAllCasinosCategories.map((category: CasinoCategory) => ({
            slug: category.slug,
            coverImage: category.coverImage,
            title: category.title,
        }))

        return {
            categories: preparedData,
            error: null,
        }
    } catch (error) {
        return {
            error: handleError(error, 'fetchAllCasinoCategories'),
            categories: [],
        }
    }
}

export const fetchAllCasinoTops = async (
    locale: Locale
): Promise<{ tops: { slug: string }[]; error: ApiError | null }> => {
    try {
        const { data, error } = await getServerQuery(GET_ALL_CASINO_TOPS, { locale })

        if (error) {
            return {
                error: handleError(error, 'fetchAllCasinoTops'),
                tops: [],
            }
        }

        return {
            error: null,
            tops: data.getAllTops,
        }
    } catch (err) {
        return {
            error: handleError(err, 'fetchAllCasinoTops'),
            tops: [],
        }
    }
}
