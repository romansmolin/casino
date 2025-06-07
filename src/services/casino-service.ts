'use strict';

import { casinoMapper } from '../mappers/casino-mappers';
import { paginate } from './paginate';
import { findCasinoByUuid, findCasinosByLocale, findAllCasinosByLocale } from '../repositories/casino-repository';

const getCasinoByUUID = async (uuid: string, locale: string) => {
    try {
        const data = await findCasinoByUuid(uuid, locale);

        console.log('data: ', data.results[0]);

        if (!data) throw new Error('Casino not found');

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
            allowedCountries: data.results[0]?.allowedCountries || [],
            allowedCurrencies: data.results[0]?.allowedCurrencies || [],
        };
    } catch (error) {
        console.error('Error fetching casino data:', error);
        throw new Error('Failed to fetch casino data');
    }
};

const getCasinosByType = async (args: any) => {
    try {
        const casinos = await findCasinosByLocale(args.locale);
        const { page, number, casinoType } = args;

        const filteredCasinos = casinos.results.filter((casino: any) =>
            casino.casinoType.some((type: string) => type === casinoType)
        );

        if (!casinos) {
            return {
                casinos: [],
                error: 'Nothing found!',
            };
        }

        const mappedCasinos = filteredCasinos.map((casino: any) => casinoMapper(casino));

        const { items: casinoItems, totalPages } = paginate(mappedCasinos, page, number);

        return {
            casinos: casinoItems || [],
            totalPages,
        };
    } catch (error) {
        console.error('Error fetching casino data:', error);
        return {
            casinos: [],
            error,
        };
    }
};

const getAllCasinosWithoutPagination = async (args: any) => {
    try {
        const { locale } = args;

        const casinos = await findAllCasinosByLocale(locale);

        console.log('casinos: ', casinos);

        const mappedCasinos = casinos.results.map((casino: any) => casinoMapper(casino));

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
