import { fetchCasinoTopByCountryServer } from '@/entities/casino'
import CasinoTopCard from '@/entities/casino/ui/casino-top-card'
import React from 'react'

interface CasinoTopProps {
    byCountry?: string
    byType?: string
}

const CasinoTop: React.FC<CasinoTopProps> = async ({ byCountry, byType }) => {
    const queryParam = byType || byCountry || 'Germany';
    const { topByCountry, error } = await fetchCasinoTopByCountryServer(queryParam)
    
    return (
            <div className='flex overflow-x-scroll lg:overflow-auto md:flex-col gap-5 mt-5'>
                {topByCountry?.map((casino: CasinoEntry) => (
                    <CasinoTopCard
                        key={casino.title}
                        casino={casino}
                    />
                ))}
            </div> 
    )
}

export default CasinoTop