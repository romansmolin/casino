import { MetadataRoute } from 'next'

import {
    fetchAllBonusCategories,
    fetchAllBonusesWithoutPagination,
} from '@/entities/bonus/api/bonus.api'
import {
    fetchAllCasinoCategories,
    fetchAllCasinoTops,
    getAllCasinosWithoutPagination,
} from '@/entities/casino/api/casino.api'
import { fetchAllPages } from '@/entities/page-content/api/page-content.api'

import { Locale, routing } from '@/shared/lib/i18n/routing'
import { bonusrUrlFriendly, getUserFriendlyUrl } from '@/shared/utils/text-formaters'

const BASE_URL = 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Use the locales from routing configuration
    const locales = routing.locales

    // HELPER FOR SITEMAP GENERATION - Only generate routes for locales where content exists

    const generateRoutesForBonusReviews = async () => {
        const allRoutes: MetadataRoute.Sitemap = []

        for (const locale of locales) {
            try {
                const { bonuses, error } = await fetchAllBonusesWithoutPagination(locale)

                // Only generate routes if we have bonuses and no error
                if (!error && bonuses && bonuses.length > 0) {
                    const routes = bonuses.map((bonus) => ({
                        url: `${BASE_URL}/${locale}/${bonusrUrlFriendly(bonus.primaryBonusType)}/${getUserFriendlyUrl(bonus.casinoName)}?uuid=${bonus.uuid}`,
                        changeFrequency: 'weekly' as const,
                        priority: 0.7,
                    }))
                    allRoutes.push(...routes)
                }
            } catch (error) {
                console.error(`Error fetching bonuses for locale "${locale}":`, error)
                // Continue with next locale instead of failing completely
            }
        }

        return allRoutes
    }

    const generateRoutesForCasinoReviews = async () => {
        const allRoutes: MetadataRoute.Sitemap = []

        for (const locale of locales) {
            try {
                const { casinos, error } = await getAllCasinosWithoutPagination(locale)

                // Only generate routes if we have casinos and no error
                if (!error && casinos && casinos.length > 0) {
                    const routes = casinos.map((casino) => ({
                        url: `${BASE_URL}/${locale}/casino-review/${bonusrUrlFriendly(casino.name)}?id=${casino.uuid}`,
                        changeFrequency: 'weekly' as const,
                        priority: 0.7,
                    }))
                    allRoutes.push(...routes)
                }
            } catch (error) {
                console.error(`Error fetching casinos for locale "${locale}":`, error)
                // Continue with next locale instead of failing completely
            }
        }

        return allRoutes
    }

    const generateRoutesForCasinoCategories = async () => {
        const allRoutes: MetadataRoute.Sitemap = []

        for (const locale of locales) {
            try {
                const { categories, error } = await fetchAllCasinoCategories(locale)

                // Only generate routes if we have categories and no error
                if (!error && categories && categories.length > 0) {
                    const routes = categories.map((category) => ({
                        url: `${BASE_URL}/${locale}/casinos/${category.slug}`,
                        changeFrequency: 'weekly' as const,
                        priority: 1,
                    }))

                    allRoutes.push(...routes)
                }
            } catch (error) {
                console.error(
                    `Error fetching casino categories for locale "${locale}":`,
                    error
                )
                // Continue with next locale instead of failing completely
            }
        }

        return allRoutes
    }

    const generateRoutesForBonusCategories = async () => {
        const allRoutes: MetadataRoute.Sitemap = []

        for (const locale of locales) {
            try {
                const { categories, error } = await fetchAllBonusCategories(locale)

                // Only generate routes if we have categories and no error
                if (!error && categories && categories.length > 0) {
                    const routes = categories.map((category) => ({
                        url: `${BASE_URL}/${locale}/bonuses/${category.slug}`,
                        changeFrequency: 'weekly' as const,
                        priority: 1,
                    }))
                    if (locale === 'ru') console.log('routes: ', routes)

                    allRoutes.push(...routes)
                }
            } catch (error) {
                console.error(`Error fetching bonus categories for locale "${locale}":`, error)
                // Continue with next locale instead of failing completely
            }
        }

        return allRoutes
    }

    const generateAllCasinoTops = async () => {
        const allRoutes: MetadataRoute.Sitemap = []

        for (const locale of locales) {
            try {
                const { tops, error } = await fetchAllCasinoTops(locale)

                // Only generate routes if we have tops and no error
                if (!error && tops && tops.length > 0) {
                    const routes = tops.map((top) => ({
                        url: `${BASE_URL}/${locale}/top/${top.slug}`,
                        changeFrequency: 'weekly' as const,
                        priority: 1,
                    }))
                    allRoutes.push(...routes)
                }
            } catch (error) {
                console.error(`Error fetching casino tops for locale "${locale}":`, error)
                // Continue with next locale instead of failing completely
            }
        }

        return allRoutes
    }

    // const generateRoutesForStaticPages = async () => {
    //     const staticRoutes = ['/']
    //     const allRoutes: MetadataRoute.Sitemap = []

    //     // For static pages, generate for all locales since they should exist
    //     for (const locale of locales) {
    //         const routes = staticRoutes.map((route) => ({
    //             url: `${BASE_URL}/${locale}${route}`,
    //             changeFrequency: 'weekly' as const,
    //             priority: 1,
    //         }))
    //         allRoutes.push(...routes)
    //     }

    //     return allRoutes
    // }

    const generateRoutesForAllPages = async () => {
        const allRoutes: MetadataRoute.Sitemap = []

        for (const locale of locales) {
            try {
                const { pages, error } = await fetchAllPages(locale)

                // Only generate routes if we have pages and no error
                if (!error && pages && pages.length > 0) {
                    const routes = pages.map((page) => ({
                        url: `${BASE_URL}/${locale}/${page.slug}`,
                        changeFrequency: 'weekly' as const,
                        priority: 0.8,
                    }))
                    allRoutes.push(...routes)
                }
            } catch (error) {
                console.error(`Error fetching pages for locale "${locale}":`, error)
                // Continue with next locale instead of failing completely
            }
        }

        return allRoutes
    }

    // SITEMAP GENERATION - Execute all route generation concurrently

    const [
        bonusReviewRoutes,
        casinoReviewsRoutes,
        staticRoutes,
        casinoCategoriesRoutes,
        bonusCategoriesRoutes,
        casinoTopsRoutes,
    ] = await Promise.all([
        generateRoutesForBonusReviews(),
        generateRoutesForCasinoReviews(),
        // generateRoutesForStaticPages(),
        generateRoutesForCasinoCategories(),
        generateRoutesForBonusCategories(),
        generateAllCasinoTops(),
        generateRoutesForAllPages(),
    ])

    return [
        ...bonusReviewRoutes,
        ...casinoReviewsRoutes,
        ...staticRoutes,
        ...casinoCategoriesRoutes,
        ...bonusCategoriesRoutes,
        ...casinoTopsRoutes,
    ]
}
