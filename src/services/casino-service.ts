"use strict";

import { casinoMapper } from "../mappers/casino-mappers";
import { paginate } from "./paginate";

const getCasinoByUUID = async (uuid, locale) => {
  try {
    const data = await strapi.service("api::casino.casino").find({
      populate: ["logo", "faq.fact1", "mainBonus", "mainBonus.bonus", "Bonus"],
      // populate: "*",
      filters: { uuid },
      locale,
    });

    if (!data) {
      throw new Error("Casino not found");
    }

    return {
      id: data.results[0].id,
      name: data.results[0].name,
      bonus_title: data.results[0].bonus_title,
      logoUrl: data.results[0].logo[0].url,
      features: data.results[0].features,
      rating: data.results[0].rating,
      review: data.results[0].review,
      faq: data.results[0].faq?.fact1,
      mainBonus: data.results[0].mainBonus,
      casinoType: data.results[0].casinoType,
      uuid: data.results[0].uuid,
      allowedCountries: data.results[0]?.allowedCountries?.data || [],
    };
  } catch (error) {
    console.error("Error fetching casino data:", error);
    throw new Error("Failed to fetch casino data");
  }
};

const getCasinosByType = async (args) => {
  try {
    const casinos = await strapi.service("api::casino.casino").find({
      populate: [
        "logo",
        "Promos",
        "Promos.Promo",
        "Promos.Promo.bonus_img",
        "faq.fact1",
        "mainBonus",
        "localizations",
      ],
      locale: args.locale,
    });
    const { page, number, casinoType } = args;

    const filteredCasinos = casinos.results.filter((casino) =>
      casino.casinoType.some((type) => type === casinoType),
    );

    if (!casinos) {
      return {
        casinos: [],
        error: "Nothing found!",
      };
    }

    const mappedCasinos = filteredCasinos.map((casino) => casinoMapper(casino));
    const { items: casinoItems, totalPages } = paginate(
      mappedCasinos,
      page,
      number,
    );

    return {
      casinos: casinoItems || [],
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching casino data:", error);
    return {
      casinos: [],
      error,
    };
  }
};

const getAllCasinosWithoutPagination = async (args) => {
  try {
    const { locale } = args;

    const casinos = await strapi.service("api::casino.casino").find({
      locale,
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

    console.log("casinos: ", casinos);

    const mappedCasinos = casinos.results.map((casino) => casinoMapper(casino));

    return {
      casinos: mappedCasinos,
    };
  } catch (error) {
    return {
      casinos: [],
    };
  }
};

export { getCasinoByUUID, getCasinosByType, getAllCasinosWithoutPagination };
