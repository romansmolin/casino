import React from 'react'
import Image from 'next/image'
import StrapiTextRenderer from '@/entities/page-content/ui/strapi-text-renderer';
import { Card, CardContent } from '@/shared/ui/card';

const CasinoMainBonus = ({ mainBonus, casinoName }: { mainBonus: CasinoMainBonus; casinoName: string }) => {
    return (
        <Card>
            <CardContent className="flex-1 space-y-8 bento-block">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="hidden lg:flex w-[30%] items-center justify-center lg:border-r-2">
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
            </CardContent>
        </Card>
    )
}

export default CasinoMainBonus
