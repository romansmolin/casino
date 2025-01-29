import { fetchAllBonusesWithoutPagination } from '@/entities/bonus/api/bonus.api'
import { Locale } from '@/shared/lib/i18n/routing'
import { getUserFriendlyUrl } from '@/shared/utils/text-formaters'
import { MetadataRoute } from 'next'

const casinoUrlTemplate = `http://localhost:3000/en/casino-review/fairspin-casino?id=05cdc587-508b-4874-a958-c9c59c81fcdd`
const BASE_URL = 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
    const locales: string[] = ['ru', 'en']

    const generateRoutesForBonusReviews = async (locale: Locale) => {
        const { bonuses } = await fetchAllBonusesWithoutPagination(locale)

        const bonusRoutes = bonuses.map(
            (bonus) => `${BASE_URL}/${locale}/casino-review/${getUserFriendlyUrl(bonus.casinoName)}?uuid=${bonus.uuid}`
        )
        console.log('bonusRoutes: ', bonusRoutes)
        return []
    }

    generateRoutesForBonusReviews('en')
    return [
        {
            url: 'https://acme.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://acme.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://acme.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}

// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://www.example.com/foo.html</loc>
//     <lastmod>2022-06-04</lastmod>
//   </url>
// </urlset>
