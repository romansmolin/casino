import { getServerQuery } from '@/shared/lib/apollo-client'
import { CASINO_BY_UUID, CASINO_TOP_BY_COUNTRY } from './casino.schemas'

export const fetchCasinoTopByCountryServer = async (country: string, locale: string) => {
    console.log('locale: ', locale)
    const { data, error } = await getServerQuery(CASINO_TOP_BY_COUNTRY, { country, locale })
    return {
        topByCountry: data.getTopByCountryName.top_list,
        error
    }
}

export const fetchCasinoByUuid = async <T,>(uuid: string, locale: string) => {
    const {data, error} = await getServerQuery(CASINO_BY_UUID, {uuid, locale})

    return {
        casino: data.getCasinoByUUID as T,
        error
    }
}
