import { fetchCasinoTopByCountryServer } from '@/entities/casino'
import CasinoTopCard from '@/entities/casino/ui/casino-top-card'
import { getLocale } from 'next-intl/server'
import React from 'react'

interface CasinoTopProps {
    byCountry?: string
    byType?: string
}

const CasinoTop: React.FC<CasinoTopProps> = async ({ byCountry, byType }) => {
    const queryParam = byType || byCountry || 'Germany';
    const locale = await getLocale()
    const { topByCountry } = await fetchCasinoTopByCountryServer(queryParam, locale)

    return (
        <div className='relative w-[calc(100%+1.25rem)] md:w-[unset]'>
            <div className='flex overflow-x-scroll lg:overflow-auto md:flex-col gap-5 mt-5 no-scrollbar'>
                {topByCountry?.map((casino: CasinoTopEntry) => (
                    <CasinoTopCard
                        key={casino.title}
                        casino={casino}
                    />
                ))}
            </div>
            <div className='pointer-events-none absolute top-1/2 transform -translate-y-1/2 h-[99%] right-0 w-5 bg-linear-to-r from-transparent to-white dark:to-black md:hidden'>
            </div>
        </div>
    )
}

export default CasinoTop