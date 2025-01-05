interface Bonus {   
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    uuid: string
    casinoLogo: string
    info: BonusInfo
    bonusTypeForUrl: string
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
    bonusType: string[]
    bonusStatus: 'active' | 'inactive'
}