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

        type Bonus {
            casino_name: String,
            casino_uuid: String
            casino_logo: String
            bonus_subtitle: String
            bonus_title: String
            info: BonusInfo
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
                            populate: ['casinos', 'logo', 'bonus_info', 'casinos.logo'],
                        });

                        const { page, number, type } = args
                        const itemsPerPage = number || 8
                        const startIndex = (page - 1) * itemsPerPage
                        const endIndex = startIndex + itemsPerPage

                        const filteredBonuses = data.results.filter(bonus =>
                            bonus.bonus_info.bonus_type.includes(type)
                        );

                        const filteredProcessedBonuses = filteredBonuses.map(item => (
                            {
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
                            }
                        ))

                        const totalPages = filteredProcessedBonuses.length % itemsPerPage
                        const pageItems = filteredProcessedBonuses.slice(startIndex, endIndex)

                        return {
                            bonuses: pageItems,
                            totalPages
                        }

                    } catch (err) {
                        console.log('Error while fetching bonuses by type')
                        return {
                            bonuses: []
                        };
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
    }
});
