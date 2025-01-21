const bonusMapper = (bonus) => ({
    casinoName: bonus.casinos[0].name,
    casinoUuid: bonus.casinos[0]?.uuid,
    casinoLogo: bonus.logo[0]?.url,
    bonusSubtitle: bonus.bonus_subtitle,
    bonusTitle: bonus.bonusTitle,
    info: {
        releaseDate: bonus.bonus_info?.release_date,
        avaialableFor: bonus.bonus_info?.available_for,
        bonusType: bonus.bonus_info?.bonus_type,
        bonusStatus: bonus.bonus_info?.bonus_status[0],
    },
    uuid: bonus?.uuid,
    bonusTypeForUrl: bonus.mainBonusTypeForUrl,
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