'use strict';

const { bonusMapper, bonusMapperWithExtras } = require("../../mappers/bonus/bonusMappers");
const paginate = require("../paginate");


const getAllBonuses = async (args) => {
    try {
        const data = await strapi.services["api::bonus.bonus"].find({
            populate: ['casinos', 'logo', 'bonus_info', 'casinos.logo'],
        });

        const mappedBonuses = data.results.map(item => bonusMapper(item));
        const { page, number } = args;
        const { items: bonuses, totalPages } = paginate(mappedBonuses, page, number);

        return {
            bonuses,
            totalPages
        };
    } catch (err) {
        console.log('Error fetching GetAllBonuses: ', err);
        return {
            bonuses: []
        };
    }
};
const getAllBonusesWithoutPagination = async (args) => {
    try {

        const data = await strapi.service('api::bonus.bonus').find({
            locale: args.locale,
            populate: ['casinos', 'logo', 'bonus_info', 'casinos.logo'],
        })

        const mappedBonuses = data.results.map(item => bonusMapper(item));

        return {
            bonuses: mappedBonuses
        };
    } catch (err) {
        console.log('Error fetching GetAllBonusesWithoutPagination: ', err);
        return {
            bonuses: []
        };
    }
};

const getBonusesByType = async (args) => {
    try {
        const data = await strapi.services["api::bonus.bonus"].find({
            populate: ['casinos', 'logo', 'bonus_info', 'casinos.logo', 'faq.fact1'],
        });

        const { page, number, type } = args;
        const filteredBonuses = data.results.filter(bonus =>
            bonus.bonus_info.bonus_type.includes(type)
        );

        const filteredProcessedBonuses = filteredBonuses.map(item => bonusMapper(item));
        const { items: bonuses, totalPages } = paginate(filteredProcessedBonuses, page, number);

        return {
            bonuses,
            totalPages
        };
    } catch (err) {
        console.log('Error while fetching bonuses by type: ', err);
        return {
            bonuses: []
        };
    }
};

const getBonusById = async (uuid) => {
    console.log('uuid', uuid)
    try {
        const data = await strapi.services["api::bonus.bonus"].find({
            filters: { uuid },
            populate: [
                'casinos',
                'logo',
                'bonus_info',
                'casinos.logo',
                'faq.fact1',
                'bonusOverview',
                'localizations'
            ],
        });
        
        const temp = await strapi.service('api::bonus.bonus').find({
            locale: 'en',
            populate: [
                'casinos',
                'logo',
                'bonus_info',
                'casinos.logo',
                'faq.fact1',
                'bonusOverview',
                'localizations'
            ],
        })
        console.log(temp)

        if (!data || !data.results.length) {
            throw new Error('Bonus not found');
        }

        const bonusData = data.results[0];
        const bonus = bonusMapperWithExtras(bonusData);

        return {
            bonus
        };
    } catch (err) {
        console.error('Error fetching Bonus by UUID:', err);
        throw new Error('Error fetching Bonus');
    }
};

module.exports = {
    getAllBonuses,
    getBonusesByType,
    getBonusById,
    getAllBonusesWithoutPagination
}