"use strict";

const { casinoMapper } = require("../../mappers/casino/casinoMappers");

const getCasinoByUUID = async (uuid) => {
	try {
		const data = await strapi.services["api::casino.casino"].find({
			populate: [
				"logo",
				"Promos",
				"Promos.Promo",
				"Promos.Promo.bonus_img",
				"faq.fact1",
				"mainBonus",
				"localizations",
			],
			filters: { uuid },
		});

		if (!data) {
			throw new Error("Casino not found");
		}

		const promos = data.results[0].Promos.map((item) => ({
			bonus_title: item.Promo.bonus_title,
			bonus_subtitle: item.Promo.bonus_subtitle,
			bonus_link: item.Promo.link,
			bonus_img: item.Promo.bonus_img[0].url,
		}));

		return {
			id: data.results[0].id,
			name: data.results[0].name,
			bonus_title: data.results[0].bonus_title,
			logoUrl: data.results[0].logo[0].url,
			features: data.results[0].features,
			rating: data.results[0].rating,
			review: data.results[0].review,
			promos: promos,
			faq: data.results[0].faq?.fact1,
			mainBonus: data.results[0].mainBonus,
			casinoType: data.results[0].casinoType,
		};
	} catch (error) {
		console.error("Error fetching casino data:", error);
		throw new Error("Failed to fetch casino data");
	}
};

const getCasinosByType = async (casinoType) => {
	try {
		const casinos = await strapi.services["api::casino.casino"].find({
			populate: [
				"logo",
				"Promos",
				"Promos.Promo",
				"Promos.Promo.bonus_img",
				"faq.fact1",
				"mainBonus",
				"localizations",
			],
		});

		const filteredCasinos = casinos.results.filter((casino) => casino.casinoType.some(type => type === casinoType))
		  
		if (!casinos) {
			return {
				casinos: [],
				error: 'Nothing found!'
			}
		}

		const mappedCasinos = filteredCasinos.map(casino => casinoMapper(casino))

		return {
			casinos: mappedCasinos|| []
		}
	} catch (error) {
		console.error("Error fetching casino data:", error);
		return {
			casinos: [],
			error,
		};
	}
};

module.exports = {
	getCasinoByUUID,
	getCasinosByType,
};
