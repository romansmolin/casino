"use strict";

const globalSearch = async (query, locale) => {
	try {
		console.log('query: ', query)
		const [casinos, bonuses] = await Promise.all([
			strapi.service("api::casino.casino").find({
				filters: { name: { $containsi: query } },
				locale,
			}),
			strapi.service('api::bonus.bonus').find({
				locale,
				filters: { casinoName: { $containsi: query } },
			})
		]);

		console.log('bonuses: ', bonuses)

		if (!casinos && !bonuses) {
			throw new Error("Casino not found");
		}

		const casinoSearchResult = casinos.results.map(casino => ({
			casinoName: casino.name,
			casinoUuid: casino.uuid
		}))

		const bonusSearchResult = bonuses.results.map(bonus => ({
			bonusTitle: bonus.bonusTitle,
			bonusUuid: bonus.uuid,
			casinoName: bonus.casinoName,
			primaryBonusType: bonus?.primaryBonusType
		}))

		return {
			casinoSearchResult,
			bonusSearchResult
		};
	} catch (err) {
		return {
			casinoSearchResult: [],
		};
	}
};

module.exports = {
	globalSearch,
};
