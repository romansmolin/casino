import { fetchAllBonusesWithoutPagination } from '@/entities/bonus/api/bonus.api'
import { Locale } from '@/shared/lib/i18n/routing'
import { bonusrUrlFriendly, getUserFriendlyUrl } from '@/shared/utils/text-formaters'
import { MetadataRoute } from 'next'

const casinoUrlTemplate = `http://localhost:3000/en/casino-review/fairspin-casino?id=05cdc587-508b-4874-a958-c9c59c81fcdd`
const BASE_URL = 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const locales: Locale[] = ['ru', 'en'] // Ensure proper typing

    const generateRoutesForBonusReviews = async (locale: Locale) => {
        try {
            const { bonuses } = await fetchAllBonusesWithoutPagination(locale)

            return bonuses.map((bonus) => ({
                url: `${BASE_URL}/${locale}/${bonusrUrlFriendly(bonus.primaryBonusType)}/${getUserFriendlyUrl(bonus.casinoName)}?uuid=${bonus.uuid}`,
                lastModified: new Date(),
                changeFrequency: 'yearly' as const,
                priority: 1,
            }))
        } catch (error) {
            console.error(`Error fetching bonuses for locale "${locale}":`, error)
            return []
        }
    }

    const generateAllBonusReviewRoutes = async () => {
        const allRoutes = await Promise.all(locales.map(generateRoutesForBonusReviews))
        return allRoutes.flat() // Flatten nested arrays
    }

    const bonusReviewRoutes = await generateAllBonusReviewRoutes()

    return [...bonusReviewRoutes]
}

// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://www.example.com/foo.html</loc>
//     <lastmod>2022-06-04</lastmod>
//   </url>
// </urlset>
