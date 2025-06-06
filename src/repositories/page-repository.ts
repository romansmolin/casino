export const findPagesByLocale = async (locale: string) => {
  return await strapi.service("api::page.page").find({
    populate: [
      "dynamicContent",
      "dynamicContent.image",
      "dynamicContent.fact1",
    ],
    locale,
  });
};
