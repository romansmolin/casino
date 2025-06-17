import { notFound } from 'next/navigation'

import React from 'react'

import { CasinoTopCard, fetchCasinoTopBySlug } from '@/entities/casino'
import { CasinoTopEntry } from '@/entities/casino/model/casino.types'

import { Locale } from '@/shared/lib/i18n/routing'

const TopPage = async ({ slug, locale }: { slug: string; locale: Locale }) => {
    const { top, error, pageTitle } = await fetchCasinoTopBySlug(slug, locale)

    if (!top || error) notFound()

    return (
        <section className="bento-block space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-primary">
                {pageTitle}
            </h1>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
                    {top?.map((casino: CasinoTopEntry) => (
                        <CasinoTopCard key={casino.title} casino={casino} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopPage
