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
import { ApiError, handleError } from '@/shared/utils/error-handler'
import { Casino, CasinoReview, CasinoTopEntry } from '../model/casino.types'

// API Response Types
interface CasinoTopByCountryResponse {
    topByCountry: CasinoTopEntry[] | null
    error: ApiError | null
}

interface CasinoByUuidResponse<T = Casino> {
    casino: T | null
    error: ApiError | null
}

interface CasinosByTypeResponse {
    casinos: Casino[] | null
    totalPages: number
    error: ApiError | null
}

interface CasinosWithoutPaginationResponse {
    casinos: Casino[] | null
    error: ApiError | null
}

interface CasinoBySlugResponse {
    casino: CasinoReview | null
    error: ApiError | null
}

interface CasinoSeoInfoResponse {
    title: string | null
    description: string | null
    keywords: string[] | null
    error: ApiError | null
}

export const fetchCasinoTopByCountryServer = async (
    country: string,
    locale: string
): Promise<CasinoTopByCountryResponse> => {
    try {
        const { data, error } = await getServerQuery(CASINO_TOP_BY_COUNTRY, { country, locale })

        if (error) {
            return {
                topByCountry: null,
                error: handleError(error, 'fetchCasinoTopByCountryServer'),
            }
        }

        return {
            topByCountry: data?.getTopByCountryName.top_list || null,
            error: null,
        }
    } catch (err) {
        return {
            topByCountry: null,
            error: handleError(err, 'fetchCasinoTopByCountryServer'),
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
        const { data, error } = await getServerQuery(GET_ALL_CASINOS_WITHOUT_PAGINATION, { locale })

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

export const getCasinoBySlug = async (slug: string, locale: Locale): Promise<CasinoBySlugResponse> => {
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
        const { data, error } = await getServerQuery(GET_CASINO_SEO_INFO_BY_SLUG, { slug, locale })

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
