/* eslint-disable no-unused-vars */
export interface CasinoTopEntry {
    rating: number
    title: string
    main_bonus_title: string
    hasRegularOffers: boolean
    hasLiveCasino: boolean
    hasVIPProgram: boolean
    hasLiveChat: boolean
    logo: string
    casino: string
    __typename: string
}

export interface Casino {
    name: string
    bonus_title: string
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
