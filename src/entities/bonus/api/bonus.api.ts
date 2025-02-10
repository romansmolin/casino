import { getServerQuery } from "@/shared/lib/apollo-client"
import { GET_ALL_BONUSES_WITHOUT_PAGINATION, GET_BONUS_BY_UUID, GET_BONUSES_BY_TYPE } from "../model/bonus.schema"
import { Locale } from "@/shared/lib/i18n/routing"

export const fetchBonusesByType = async (page: number, number: number, type: string, locale: Locale): Promise<{ bonuses: Bonus[], totalPages: number, error: any }> => {
    const { data, error } = await getServerQuery(GET_BONUSES_BY_TYPE, { page, number, type, locale })
    return {
        bonuses: data?.getBonusesByType.bonuses,
        totalPages: data?.getBonusesByType.totalPages,
        error
    }
}

export const fetchBonusById = async (id: string, locale: Locale): Promise<{ bonus: Bonus, error: any }> => {
    const { data, error } = await getServerQuery(GET_BONUS_BY_UUID, { uuid: id, locale })
    return {
        bonus: data?.getBonusById.bonus,
        error
    }
}

export const fetchAllBonusesWithoutPagination = async (locale: string): Promise<{bonuses: Bonus[], error: any}> => {
    const { data, error } = await getServerQuery(GET_ALL_BONUSES_WITHOUT_PAGINATION, { locale })
    return {
        bonuses: data?.getAllBonusesWithoutPagination.bonuses,
        error
    }
}