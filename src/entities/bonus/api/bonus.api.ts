import { getServerQuery } from "@/shared/lib/apollo-client"
import { GET_BONUSES_BY_TYPE } from "../model/bonus.schema"

export const fetchBonusesByType = async (page: number, number: number, type: string): Promise<{ bonuses: Bonus[], totalPages: number, error: any }> => {
    const { data, error } = await getServerQuery(GET_BONUSES_BY_TYPE, { page, number, type })
    return {
        bonuses: data.getBonusesByType.bonuses,
        totalPages: data.getBonusesByType.totalPages,
        error
    }
}