import { fetchCasinoTopByCountryServer } from '@/entities/casino'
import CasinoTopCard from '@/entities/casino/ui/casino-top-card'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'
import { getLocale } from 'next-intl/server'
import React from 'react'

interface CasinoTopProps {
    byCountry?: string
    byType?: string
}

const CasinoTop: React.FC<CasinoTopProps> = async ({ byCountry, byType }) => {
    const queryParam = byType || byCountry || 'Germany'
    const locale = await getLocale()
    const { topByCountry } = await fetchCasinoTopByCountryServer(queryParam, locale)

    return (
        <ScrollArea className="w-[calc(100%+1.25rem)] md:w-[unset]">
            <div className="flex md:flex-col gap-5 mt-5">
                {topByCountry?.map((casino: CasinoTopEntry) => (
                    <CasinoTopCard key={casino.title} casino={casino} />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default CasinoTop
