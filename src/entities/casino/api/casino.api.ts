import { getServerQuery } from '@/shared/lib/apollo-client'
import { CASINO_BY_UUID, CASINO_TOP_BY_COUNTRY, CASINOS_BY_TYPE, GET_ALL_CASINOS_WITHOUT_PAGINATION } from '../model/casino.schemas'
import { Locale } from '@/shared/lib/i18n/routing'

export const fetchCasinoTopByCountryServer = async (country: string, locale: string) => {
    const { data, error } = await getServerQuery(CASINO_TOP_BY_COUNTRY, { country, locale })
    return {
        topByCountry: data?.getTopByCountryName.top_list,
        error
    }
}

export const fetchCasinoByUuid = async <T,>(uuid: string, locale: string) => {
    const {data, error} = await getServerQuery(CASINO_BY_UUID, {uuid, locale})

    return {
        casino: data?.getCasinoByUUID as T,
        error
    }
}

export const fetchCasinoByType = async({ page, number, casinoType, locale }: { page: number, number: number, casinoType:string, locale: Locale  }) => {
    const {data, error} = await getServerQuery(CASINOS_BY_TYPE, {casinoType, page, number, locale})
    // console.log("casinosCategory: ", data)
    return {
        casinos: data?.getCasinosByType.casinos,
        totalPages: data?.getCasinosByType.totalPages,
        error
    }
}

export const getAllCasinosWithoutPagination = async(locale: Locale): Promise<{casinos: Casino[], error: any}> => {
    const {data, error} = await getServerQuery(GET_ALL_CASINOS_WITHOUT_PAGINATION, {locale})

    return {
        casinos: data?.getAllCasinosWithoutPagination.casinos,
        error
    }
}
