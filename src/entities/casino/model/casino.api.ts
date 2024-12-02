import { getServerQuery } from '@/shared/lib/apollo-client'
import { CASINO_TOP_BY_COUNTRY } from './casino.schemas'

export const fetchCasinoTopByCountryServer = async (country: string) => {
    const { data, error } = await getServerQuery(CASINO_TOP_BY_COUNTRY, { country })
    return {
        topByCountry: data.getTopByCountryName.top_list,
        error
    }
}
