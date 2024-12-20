import React from 'react'
import { StrapiTextRenderer } from '@/features/strapi'
import Image from 'next/image'

const CasinoMainBonus = ({ mainBonus, casinoName }: { mainBonus: CasinoMainBonus; casinoName: string }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:flexw-[30%] items-center justify-center lg:border-r-2">
                <Image
                    style={{ width: 'auto', height: 'auto' }}
                    width={250}
                    height={100}
                    src="/assets/discount-promotion.png"
                    alt={`${casinoName} logo`}
                />
            </div>
            <div className='flex-1 flex-shrink-0 space-y-8'>
                <StrapiTextRenderer contentData={mainBonus.info} />
            </div>
            <div className="flex lg:hidden items-center justify-center lg:border-r-2">
                <Image
                    style={{ width: 'auto', height: 'auto' }}
                    width={250}
                    height={100}
                    src="/assets/discount-promotion.png"
                    alt={`${casinoName} logo`}
                />
            </div>
        </div>
    )
}

export default CasinoMainBonus
