import type { GameProvider } from '@/entities/game-provider'
import type { PaymentProvider } from '@/entities/payment-provider'

import type { ApiError } from '@/shared/utils/error-handler'

/* eslint-disable no-unused-vars */
export interface CasinoTopEntry {
    rating: number
    title: string
    mainBonusTitle: string
    hasRegularOffers: boolean
    hasLiveCasino: boolean
    hasVIPProgram: boolean
    hasLiveChat: boolean
    logo: string
    slug: string
    __typename: string
}

export interface Casino {
    name: string
    bonusTitle: string
    logoUrl: string
    features: string[]
    rating: number
    mainBonus: CasinoMainBonus
    casinoType: CasinoType[]
    uuid: string
    allowedCountries: string[]
    allowedCurrencies: string[]
    slug: string
    affiliateLink: string
    gameProviders: GameProvider[]
    paymentProviders: PaymentProvider[]
}

export interface CasinoReview extends Casino {
    review: StrapiContent[]
    faq: CasinoReviewFaq[]
}

export type CasinoMainBonus = {
    bonusLink: string
    info: StrapiContent[]
    bonus: {
        uuid: string
        primaryBonusType: BonusCategoryType
    }
}

export type CasinoReviewFaq = {
    text: string
    label: string
}

export type StrapiContentItem = {
    type: string
    text: string
    bold: boolean
    url: string
    children: {
        text: string
    }[]
}

export type StrapiContent = {
    type: string
    children: StrapiContentItem[]
}

export type CasinoType = 'sportsbook' | 'fresh-casino' | 'crypto-casino' | 'pay-n-play'

// Import types that may be used but not defined in this file
type BonusCategoryType =
    | 'free-spins-bonuses'
    | 'real-money-bonuses'
    | 'cashback-bonuses'
    | 'no-deposit-bonuses'
    | 'best-of-the-month'

export interface CasinoCategory {
    slug: string
    coverImage: string
    title: string
}

// API Response Types
export interface CasinoTopByCountryResponse {
    topByCountry: CasinoTopEntry[] | null
    error: ApiError | null
}

export interface CasinoTopBySlugResponse {
    top: CasinoTopEntry[] | null
    pageTitle: string | null
    error: ApiError | null
}

export interface CasinoByUuidResponse<T = Casino> {
    casino: T | null
    error: ApiError | null
}

export interface CasinosByTypeResponse {
    casinos: Casino[] | null
    totalPages: number
    error: ApiError | null
}

export interface CasinosWithoutPaginationResponse {
    casinos: Casino[] | null
    error: ApiError | null
}

export interface CasinoBySlugResponse {
    casino: CasinoReview | null
    error: ApiError | null
}

export interface CasinoSeoInfoResponse {
    title: string | null
    description: string | null
    keywords: string[] | null
    error: ApiError | null
}

export interface CasinoCategoryBySlugResponse extends CasinoSeoInfoResponse {
    categoryCasinoType: string | null
    pageTitle: string | null
}

export interface AllCasinoCategories {
    categories: CasinoCategory[]
    error: ApiError | null
}
