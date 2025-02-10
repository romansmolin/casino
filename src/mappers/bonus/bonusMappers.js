const bonusMapper = (bonus) => ({
    casinoName: bonus.casinoName,
    casinoUuid: bonus.casinos[0]?.uuid,
    casinoLogo: bonus.logo[0]?.url,
    bonusSubtitle: bonus.bonus_subtitle,
    bonusTitle: bonus.bonusTitle,
    info: {
        releaseDate: bonus.bonus_info?.release_date,
        availableFor: bonus.bonus_info?.availableFor,
        bonusType: bonus.bonus_info?.bonus_type,
        bonusStatus: bonus.bonus_info?.bonus_status[0],
    },
    uuid: bonus?.uuid,
    primaryBonusType: bonus?.primaryBonusType,
})

const bonusMapperWithExtras = (bonus) => ({
    ...bonusMapper(bonus),
    faqInfo: bonus.faq?.fact1,
    bonusReview: bonus.bonusOverview,
})

module.exports = {
    bonusMapper,
    bonusMapperWithExtras,
}