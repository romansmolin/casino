import { BookOpenCheck, Play } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import Typography from '@/shared/components/typography/typography'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'

import { BonusCategoryType } from '../model/bonus.types'
import BonusTypeBadge from './bonus-type-badge/bonus-type-badge'

interface BonusDetailsCardProps {
    bonusLogo: string
    bonusTitle: string
    bonusSubtitle: string
    bonusStatus: 'active' | 'inactive'
    casinoName: string
    casinoUuid: string
    bonusTypes: BonusCategoryType[]
}

const BonusDetailsCard: React.FC<BonusDetailsCardProps> = async ({
    bonusLogo,
    bonusTitle,
    bonusSubtitle,
    bonusStatus,
    casinoUuid,
    casinoName,
    bonusTypes,
}) => {
    const locale = await getLocale()

    return (
        <Card>
            <CardContent className="flex flex-col gap-5 lg:gap-[unset] lg:flex-row justify-between items-center bento-block">
                <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
                    <div className="rounded-xl w-full min-h-40 bg-primary flex justify-center items-centers lg:max-w-sm">
                        <Image src={bonusLogo} alt={bonusTitle} width={180} height={150} />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col items-center gap-2 lg:items-start">
                            <Typography as="h1" variant="h1">
                                {casinoName}
                            </Typography>
                            <Typography
                                as="h2"
                                variant="h4"
                                className="text-center md:text-left"
                            >
                                {bonusSubtitle}
                            </Typography>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            {bonusTypes.map(
                                (type) =>
                                    type !== 'free-spins-bonuses' && (
                                        <div key={type}>
                                            <BonusTypeBadge
                                                key={type}
                                                type={type}
                                                className="w-fit"
                                            />
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full lg:w-[unset]">
                    <Button size={'lg'} className="flex gap-2 items-center">
                        <Play />
                        <p>Get Bonus Now!</p>
                    </Button>
                    <Button
                        size={'lg'}
                        className="bg-accent text-accent-foreground hover:text-white"
                        asChild
                    >
                        <div className="bg-accent text-accent-foreground hover:text-white flex">
                            <BookOpenCheck />
                            <Link
                                href={{
                                    pathname: `/${locale}/casino-review/${bonusrUrlFriendly(casinoName)}`,
                                    query: {
                                        id: casinoUuid,
                                    },
                                }}
                            >
                                Read Review!
                            </Link>
                        </div>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default BonusDetailsCard
