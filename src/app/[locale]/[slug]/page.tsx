import React, { Suspense } from 'react'

import { StaticPage } from '@/views/static-page'

import { fetchPageSeoInfoBySlug } from '@/entities/page-content'

import type { Locale } from '@/shared/lib/i18n/routing'

interface StaticPageProps {
    params: Promise<{ slug: string; locale: Locale }>
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; locale: Locale }>
}) {
    const { slug, locale } = await params
    const { title, description, keywords } = await fetchPageSeoInfoBySlug(slug, locale)

    return {
        title: `${title} | ${new Date().getFullYear()}`,
        description,
        keywords,
        openGraph: {
            title,
            description,
        },
    }
}

const Static: React.FC<StaticPageProps> = async ({ params }) => {
    const { locale, slug } = await params

    return (
        <Suspense>
            <StaticPage locale={locale} slug={slug} />
        </Suspense>
    )
}

export default Static
