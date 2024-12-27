interface Bonus {   
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    uuid: string
    casinoLogo: string
    info: BonusInfo
}

type BonusInfo = {
    releaseDate: string,
    availableFor: string[], 
    bonusType: string[]
    bonusStatus: string
}