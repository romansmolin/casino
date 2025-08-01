import { SquareMousePointer } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import { CasinoMainBonus as CasinoMainBonusType } from '@/entities/casino'
import { StrapiContent } from '@/entities/page-content/model/types'
import StrapiTextRenderer from '@/entities/page-content/ui/strapi-text-renderer'

import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'

const CasinoMainBonus = async ({
    mainBonus,
    casinoName,
}: {
    mainBonus: CasinoMainBonusType
    casinoName: string
}) => {
    const locale = await getLocale()
    const t = await getTranslations('bonuses')

    return (
        <Card className="shadow-none!">
            <CardContent className="p-[unset]! border-none!">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 shrink-0 space-y-5 bento-block">
                        <StrapiTextRenderer contentData={mainBonus.info as StrapiContent[]} />

                        <div className="flex flex-col md:flex-row gap-3">
                            <Button size="lg" asChild>
                                <Link href={mainBonus.bonusLink || '#'} className="flex gap-2">
                                    <SquareMousePointer />
                                    {t('claim-bonus')}
                                </Link>
                            </Button>

                            {mainBonus?.bonus?.uuid && (
                                <Button size="lg" variant="outline" asChild>
                                    <Link
                                        href={{
                                            pathname: `/${locale}/${bonusrUrlFriendly(mainBonus.bonus.primaryBonusType)}/${bonusrUrlFriendly(casinoName)}`,
                                            query: { uuid: mainBonus.bonus.uuid },
                                        }}
                                        className="flex gap-2"
                                    >
                                        <SquareMousePointer />
                                        {t('read')}
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-center bento-block">
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
