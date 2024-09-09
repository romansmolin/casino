'use strict';

module.exports = (strapi) => ({ nexus }) => ({
    typeDefs: `
        type GetAllBonuses {
            bonuses: [Bonus]
            totalPages: Int
        }

        type GetBonusesByType {
            bonuses: [Bonus]
            totalPages: Int
        }

        type GetBonusById {
            bonus: Bonus
        }

        type Bonus {
            casino_name: String,
            casino_uuid: String
            casino_logo: String
            bonus_subtitle: String
            bonus_title: String
            info: BonusInfo
            faqInfo: [FaqItem]
            bonusReview: [BonusDetails]
            uuid: String

        }
        
        type BonusDetails {
            type: String
            children: [BonusText]
        }

        type BonusText {
            type: String
            text: String
            bold: Boolean
        }

        type FaqItem {
            text: String
            label: String
        }

        type BonusInfo {
            release_date: String,
            available_for: [String],
            bonus_type: [String],
            bonus_status: String
        }

        extend type Query {
            getAllBonuses(page: Int!, number: Int!): GetAllBonuses  
            getBonusesByType(page: Int!, number: Int!, type: String!): GetBonusesByType
            getBonusById(uuid: String!): GetBonusById
        }
    `,
    resolvers: {
        Query: {
            getAllBonuses: {
                resolve: async (parent, args) => {
                    try {
                        const data = await strapi.services["api::bonus.bonus"].find({
                            populate: ['casinos', 'logo', 'bonus_info', 'casinos.logo'],
                        });

                        const { page, number } = args
                        const itemsPerPage = number || 8
                        const startIndex = (page - 1) * itemsPerPage
                        const endIndex = startIndex + itemsPerPage

                        const bestBonuses = data.results.filter(bonus =>
                            bonus.bonus_info.bonus_type.includes('bestOfTheMonth')
                        );
                        console.log('bestBonuses: ', bestBonuses)

                        const bonuses = data.results?.map(item => ({
                            casino_name: item.casinos[0].name,
                            casino_uuid: item.casinos[0].uuid,
                            casino_logo: item.logo[0].url,
                            bonus_subtitle: item.bonus_subtitle,
                            bonus_title: item.casinos[0]?.bonus_title,
                            info: {
                                release_date: item.bonus_info?.release_date,
                                available_for: item.bonus_info?.available_for,
                                bonus_type: item.bonus_info?.bonus_type,
                                bonus_status: item.bonus_info?.bonus_status[0]
                            }
                        }));

                        const totalPages = bonuses.length % itemsPerPage
                        const pageItems = bonuses.slice(startIndex, endIndex)

                        return {
                            bonuses: pageItems,
                            totalPages
                        };
                    } catch (err) {
                        console.log('Error fetching GetAllBonuses: ', err);
                        return {
                            bonuses: []
                        };
                    }
                }
            },
            getBonusesByType: {
                resolve: async (parent, args) => {
                    try {
                        const data = await strapi.services["api::bonus.bonus"].find({
                            populate: ['casinos', 'logo', 'bonus_info', 'casinos.logo', 'faq.fact1'],
                        });

                        const { page, number, type } = args
                        const itemsPerPage = number || 8
                        const startIndex = (page - 1) * itemsPerPage
                        const endIndex = startIndex + itemsPerPage

                        const filteredBonuses = data.results.filter(bonus =>
                            bonus.bonus_info.bonus_type.includes(type)
                        );

                        console.log('filteredBonuses: ', filteredBonuses)

                        const filteredProcessedBonuses = filteredBonuses.map(item => (
                            {
                                casino_name: item.casinoName,
                                casino_uuid: item.casinos[0]?.uuid,
                                casino_logo: item.logo[0]?.url,
                                bonus_subtitle: item.bonus_subtitle,
                                bonus_title: item.bonusTitle,
                                info: {
                                    release_date: item.bonus_info?.release_date,
                                    available_for: item.bonus_info?.available_for,
                                    bonus_type: item.bonus_info?.bonus_type,
                                    bonus_status: item.bonus_info?.bonus_status[0]
                                },
                                uuid: item?.uuid
                            }
                        ))

                        console.log('filteredProcessedBonuses: ', filteredProcessedBonuses)

                        const totalPages = Math.ceil(filteredProcessedBonuses.length / itemsPerPage);
                        const pageItems = filteredProcessedBonuses.slice(startIndex, endIndex)

                        return {
                            bonuses: pageItems,
                            totalPages
                        }

                    } catch (err) {
                        console.log('Error while fetching bonuses by type: ', err)
                        return {
                            bonuses: []
                        };
                    }
                }
            },
            getBonusById: {
                resolve: async (parent, args) => {
                    try {
                        const { uuid } = args;
                        console.log('id: ', uuid)
                        const data = await strapi.services["api::bonus.bonus"].find({
                            filters: { uuid },
                            populate: [
                                'casinos',
                                'logo',
                                'bonus_info',
                                'casinos.logo',
                                'faq.fact1',
                                'bonusOverview',
                            ],
                        });

                        if (!data) {
                            throw new Error('Bonus not found');
                        }

                        const { results } = data;
                        const bonusData = results[0];
                        console.log(bonusData)    
                                        // Map the data to match the Bonus type
                        const bonus = {
                            casino_name: bonusData.casinos[0]?.name ?? bonusData.casinoName,
                            casino_uuid: bonusData.casinos[0]?.uuid,
                            casino_logo: bonusData.logo[0]?.url,
                            bonus_subtitle: bonusData.bonus_subtitle,
                            bonus_title: bonusData.casinos[0]?.bonus_title ?? bonusData.bonusTitle,
                            info: {
                                release_date: bonusData.bonus_info?.release_date,
                                available_for: bonusData.bonus_info?.available_for,
                                bonus_type: bonusData.bonus_info?.bonus_type,
                                bonus_status: bonusData.bonus_info?.bonus_status[0],
                            },
                            uuid: bonusData.uuid,
                            faqInfo: bonusData.faq?.fact1,
                            bonusReview: bonusData.bonusOverview
                        };

                        return {
                            bonus
                        };
                    } catch (err) {
                        console.error('Error fetching Bonus by UUID:', err);
                        throw new Error('Error fetching Bonus');
                    }
                }
            }
        }
    },
    resolversConfig: {
        "Query.getAllBonuses": {
            auth: false,
        },
        "Query.getBonusesByType": {
            auth: false,
        },
        "Query.getBonusById": {
            auth: false,
        },
    }
});
