"use strict";

import {
  searchCasinosByName,
  searchBonusesByCasinoName,
} from "../repositories/search-repository";

const globalSearch = async (query: string, locale: string) => {
  try {
    console.log("query: ", query);
    const [casinos, bonuses] = await Promise.all([
      searchCasinosByName(query, locale),
      searchBonusesByCasinoName(query, locale),
    ]);

    console.log("bonuses: ", bonuses);

    if (!casinos && !bonuses) {
      throw new Error("Casino not found");
    }

    const casinoSearchResult = casinos.results.map((casino: any) => ({
      casinoName: casino.name,
      casinoUuid: casino.uuid,
    }));

    const bonusSearchResult = bonuses.results.map((bonus: any) => ({
      bonusTitle: bonus.bonusTitle,
      bonusUuid: bonus.uuid,
      casinoName: bonus.casinoName,
      primaryBonusType: bonus?.primaryBonusType,
    }));

    return {
      casinoSearchResult,
      bonusSearchResult,
    };
  } catch (err) {
    return {
      casinoSearchResult: [],
    };
  }
};

export { globalSearch };
