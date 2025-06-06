export const findCasinoByUuid = async (uuid: string, locale: string) => {
  return await strapi.service("api::casino.casino").find({
    populate: ["logo", "faq.fact1", "mainBonus", "mainBonus.bonus", "Bonus"],
    filters: { uuid },
    locale,
  });
};

export const findCasinosByLocale = async (locale: string) => {
  return await strapi.service("api::casino.casino").find({
    populate: [
      "logo",
      "Promos",
      "Promos.Promo",
      "Promos.Promo.bonus_img",
      "faq.fact1",
      "mainBonus",
      "localizations",
    ],
    locale,
  });
};

export const findAllCasinosByLocale = async (locale: string) => {
  return await strapi.service("api::casino.casino").find({
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
};
