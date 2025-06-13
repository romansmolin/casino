import { StrapiContent } from '@/entities/casino/model/casino.types'

import { ApiError } from '@/shared/utils/error-handler'

/* eslint-disable no-unused-vars */
export interface Bonus {
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    uuid: string
    casinoLogo: string
    info: BonusInfo
    primaryBonusType: string
    bonusReview: StrapiContent[]
    faqInfo: BonusFaq[]
    slug: string
}

export type BonusFaq = {
    label: string
    text: string
}

export type BonusInfo = {
    releaseDate: string
    availableFor: string[]
    bonusType: BonusCategoryType[]
    bonusStatus: 'active' | 'inactive'
}

export type BonusCategoryType =
    | 'free-spins-bonuses'
    | 'real-money-bonuses'
    | 'cashback-bonuses'
    | 'no-deposit-bonuses'
    | 'best-of-the-month'

export interface BonusesByTypeResponse {
    bonuses: Bonus[]
    totalPages: number
    error: ApiError | null
}

export interface BonusByIdResponse {
    bonus: Bonus | null
    error: ApiError | null
}

export interface BonusesWithoutPaginationResponse {
    bonuses: Bonus[]
    error: ApiError | null
}

export interface BonusBySlugResponse {
    title: string | null
    description: string | null
    keywords: string[] | null
    categoryBonusType: string | null
    error: ApiError | null
}

export interface BonusCategory {
    slug: string
    coverImage: string
    title: string
}

export interface AllBonusCategoriesResponse {
    categories: BonusCategory[]
    error: ApiError | null
}
