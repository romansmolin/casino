import { getServerQuery } from '@/shared/lib/apollo-client'
import {
    CASINO_BY_SLUG,
    CASINO_BY_UUID,
    CASINO_TOP_BY_COUNTRY,
    CASINOS_BY_TYPE,
    GET_ALL_CASINOS_WITHOUT_PAGINATION,
    GET_CASINO_SEO_INFO_BY_SLUG,
} from '../model/casino.schemas'
import { Locale } from '@/shared/lib/i18n/routing'

interface ApiError {
    message: string
    code?: string
    originalError?: any
}

const handleError = (error: any, context: string): ApiError => {
    console.error(`Error in ${context}:`, error)

    if (error?.graphQLErrors?.length > 0) {
        return {
            message: error.graphQLErrors[0].message,
            code: error.graphQLErrors[0].extensions?.code,
            originalError: error,
        }
    }

    if (error?.networkError) {
        return {
            message: 'Network error occurred',
            code: 'NETWORK_ERROR',
            originalError: error,
        }
    }

    return {
        message: error?.message || 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR',
        originalError: error,
    }
}

export const fetchCasinoTopByCountryServer = async (
    country: string,
    locale: string
): Promise<{ topByCountry?: any; error?: ApiError }> => {
    try {
        const { data, error } = await getServerQuery(CASINO_TOP_BY_COUNTRY, { country, locale })

        if (error) {
            return {
                error: handleError(error, 'fetchCasinoTopByCountryServer'),
            }
        }

        return {
            topByCountry: data?.getTopByCountryName.top_list,
        }
    } catch (err) {
        return {
            error: handleError(err, 'fetchCasinoTopByCountryServer'),
        }
    }
}

export const fetchCasinoByUuid = async <T>(
    uuid: string,
    locale: string
): Promise<{ casino?: T; error?: ApiError }> => {
    try {
        const { data, error } = await getServerQuery(CASINO_BY_UUID, { uuid, locale })

        if (error) {
            return {
                error: handleError(error, 'fetchCasinoByUuid'),
            }
        }

        return {
            casino: data?.getCasinoByUUID as T,
        }
    } catch (err) {
        return {
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
}): Promise<{ casinos?: any[]; totalPages?: number; error?: ApiError }> => {
    try {
        if (!page) page = 1
        console.log('page: ', page)

        const { data, error } = await getServerQuery(CASINOS_BY_TYPE, {
            casinoType,
            page,
            number,
            locale,
        })

        if (error) {
            return {
                error: handleError(error, 'fetchCasinoByType'),
            }
        }

        return {
            casinos: data?.getCasinosByType.casinos,
            totalPages: data?.getCasinosByType.totalPages,
        }
    } catch (err) {
        return {
            error: handleError(err, 'fetchCasinoByType'),
        }
    }
}

export const getAllCasinosWithoutPagination = async (
    locale: Locale
): Promise<{ casinos?: Casino[]; error?: ApiError }> => {
    try {
        const { data, error } = await getServerQuery(GET_ALL_CASINOS_WITHOUT_PAGINATION, { locale })

        if (error) {
            return {
                error: handleError(error, 'getAllCasinosWithoutPagination'),
            }
        }

        return {
            casinos: data?.getAllCasinosWithoutPagination.casinos,
        }
    } catch (err) {
        return {
            error: handleError(err, 'getAllCasinosWithoutPagination'),
        }
    }
}

export const getCasinoBySlug = async (
    slug: string,
    locale: Locale
): Promise<{ casino?: CasinoReview; error?: ApiError }> => {
    try {
        const { data, error } = await getServerQuery(CASINO_BY_SLUG, { slug, locale })

        if (error) {
            return {
                error: handleError(error, 'getCasinoBySlug'),
            }
        }

        return {
            casino: data?.getCasinoBySlug,
        }
    } catch (err) {
        return {
            error: handleError(err, 'getCasinoBySlug'),
        }
    }
}

export const getCasinoSeoInfoBySlug = async (
    slug: string,
    locale: string
): Promise<{ title?: string; description?: string; error?: ApiError }> => {
    try {
        const { data, error } = await getServerQuery(GET_CASINO_SEO_INFO_BY_SLUG, { slug, locale })

        if (error) {
            return {
                error: handleError(error, 'getCasinoSeoInfoBySlug'),
            }
        }

        return {
            title: data?.getCasinoSeoInfoBySlug?.title,
            description: data?.getCasinoSeoInfoBySlug?.description,
        }
    } catch (err) {
        return {
            error: handleError(err, 'getCasinoBySlug'),
        }
    }
}
