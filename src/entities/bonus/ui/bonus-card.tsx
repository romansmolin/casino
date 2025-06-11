import { Gift } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'

import { BonusCategoryType, BonusInfo } from '../model/bonus.types'
import BonusTypeBadge from './bonus-type-badge/bonus-type-badge'

interface BonusCardProps {
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    casinoLogo: string
    info: BonusInfo
    bonusCardClass?: string
    slug: string
}

const BonusCard: React.FC<BonusCardProps> = async ({
    casinoName,
    bonusCardClass = '',
    bonusTitle,
    casinoLogo,
    info,
    slug,
}) => {
    const locale = await getLocale()
    const t = await getTranslations('bonuses')

    return (
        <Card
            className={cn(
                'w-full border flex flex-col max-w-[270px] min-w-[270px] md:max-w-[unset] mx-auto md:min-w-[305px]  lg:max-w-[unset] space-y-5 h-full',
                bonusCardClass
            )}
        >
            <CardHeader className="w-full p-[unset] mb-[unset]">
                <div className="bg-primary w-full flex justify-center rounded-xl items-center">
                    <Image
                        src={casinoLogo}
                        alt={`${casinoName} logo`}
                        width={150}
                        height={100}
                        blurDataURL="https://placehold.co/405x405"
                        priority
                    />
                </div>
            </CardHeader>

            <CardContent className=" mt-1! grow px-5 lg:px-4">
                <div className="flex flex-col space-y-4 py-6">
                    <Typography variant="h3" as="h2" className="text-center">
                        {casinoName}
                    </Typography>
                    <h3 className="text-2xl font-bold text-center">{bonusTitle}</h3>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {info.bonusType.map(
                        (type: BonusCategoryType) =>
                            type !== 'free-spins-bonuses' && (
                                <BonusTypeBadge type={type} key={type} className="w-fit" />
                            )
                    )}
                </div>
            </CardContent>

            <CardFooter className="px-5 lg:px-4">
                <Button className="w-full" asChild size={'lg'}>
                    <Link href={`/${locale}/bonus/${slug}`}>
                        <Gift />
                        {t('claim-bonus')}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default BonusCard
