/* eslint-disable no-unused-vars */
interface Bonus {   
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
}

type BonusFaq = {
    label: string
    text: string
}

type BonusInfo = {
    releaseDate: string,
    availableFor: string[], 
    bonusType: BonusCategoryType[]
    bonusStatus: 'active' | 'inactive'
}

type BonusCategoryType = 'free-spins-bonuses' | 'real-money-bonuses' | 'cashback-bonuses' | 'no-deposit-bonuses' | 'best-of-the-month';
