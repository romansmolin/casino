import { fetchAllBonusesWithoutPagination } from '@/entities/bonus/api/bonus.api'
import { getAllCasinosWithoutPagination } from '@/entities/casino/api/casino.api'
import { Locale } from '@/shared/lib/i18n/routing'
import { bonusrUrlFriendly, getUserFriendlyUrl } from '@/shared/utils/text-formaters'
import { MetadataRoute } from 'next'

const BASE_URL = 'http://localhost:3000'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const locales: Locale[] = ['ru', 'en'] // Ensure proper typing

    const generateRoutesForBonusReviews = async (locale: Locale) => {
        try {
            const { bonuses } = await fetchAllBonusesWithoutPagination(locale)

            return bonuses.map((bonus) => ({
                url: `${BASE_URL}/${locale}/${bonusrUrlFriendly(bonus.primaryBonusType)}/${getUserFriendlyUrl(bonus.casinoName)}?uuid=${bonus.uuid}`,
                // lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }))
        } catch (error) {
            console.error(`Error fetching casinos for locale "${locale}":`, error)
            return []
        }
    }

    const generateRoutesForCasinoReviews = async (locale: Locale) => {
        try {
            const {casinos} = await getAllCasinosWithoutPagination(locale)

            return casinos.map((casino) => ({
                url: `${BASE_URL}/${locale}/casino-review/${bonusrUrlFriendly(casino.name)}?id=${casino.uuid}`,
                // lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }))
        } catch (error) {
            console.error(`Error fetching casinos for locale "${locale}":`, error)
            return []
        }
    }

    const generateRoutesForStaticPages = async (locale: Locale) => {
        const staticRoutes = [
            '/',
            '/category/no-deposit-bonuses',
            '/category/free-spins-bonuses',
            '/category/free-cash-bonuses',
            '/category/0-wager-bonuses',
            '/category/welcome-bonuses',
            '/category/cashback-bonuses',
            '/category/crypto-bonuses',
            '/casino-category/sportsbook-casinos',
            '/casino-category/fresh-casinos',
            '/casino-category/crypto-casinos',
            '/casino-category/pay-n-play-casinos'
        ]

        return staticRoutes.map(route => ({
            url: `${BASE_URL}/${locale}${route}`,
            // lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        }))
    }

    const generateAllBonusReviewRoutes = async () => {
        const allRoutes = await Promise.all(locales.map(generateRoutesForBonusReviews))
        return allRoutes.flat() // Flatten nested arrays
    }

    const generateAllCasinosReviewRoutes = async () => {
        const allRoutes = await Promise.all(locales.map(generateRoutesForCasinoReviews))
        return allRoutes.flat() // Flatten nested arrays
    }

    const generateAllStaticRoutes = async () => {
        const allRoutes = await Promise.all(locales.map(generateRoutesForStaticPages))
        return allRoutes.flat() // Flatten nested arrays
    }

    const bonusReviewRoutes = await generateAllBonusReviewRoutes()
    const casinoReviewsRoutes = await generateAllCasinosReviewRoutes()
    const staticRoutes = await generateAllStaticRoutes()

    return [...bonusReviewRoutes, ...casinoReviewsRoutes, ...staticRoutes]
}
