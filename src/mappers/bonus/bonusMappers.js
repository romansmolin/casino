const bonusMapper = (bonus) => ({
    casino_name: bonus.casinos[0].name,
    casino_uuid: bonus.casinos[0]?.uuid,
    casino_logo: bonus.logo[0]?.url,
    bonus_subtitle: bonus.bonus_subtitle,
    bonus_title: bonus.bonusTitle,
    info: {
        release_date: bonus.bonus_info?.release_date,
        available_for: bonus.bonus_info?.available_for,
        bonus_type: bonus.bonus_info?.bonus_type,
        bonus_status: bonus.bonus_info?.bonus_status[0],
    },
    uuid: bonus?.uuid,
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