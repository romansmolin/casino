import { Book, Dices, Star } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import RatingCircle from '@/shared/components/rating-circle/rating-circle'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'

const CasinoTopCard = async ({ casino }: { casino: CasinoTopEntry }) => {
    const t = await getTranslations('casinoTopCard')
    const locale = await getLocale()

    return (
        <Card>
            <CardContent className="max-w-[270px] min-w-[270px] md:max-w-[unset] grid grid-cols-1 md:grid-cols-5 justify-between gap-4 items-center rounded-xl box-border border shadow-none">
                {/* Logo */}
                <div className="md:col-span-1 h-[120px] md:h-[170px] bg-primary p-4 rounded-xl flex items-center justify-center">
                    <div className="w-full md:w-[150px] h-full flex justify-center items-center">
                        <Image
                            src={casino.logo}
                            alt={`${casino.title} Logo`}
                            width={270}
                            height={270}
                            priority
                            placeholder="blur"
                            className="w-full h-full object-contain"
                            blurDataURL="https://placehold.co/405x405"
                        />
                    </div>
                </div>
                {/* Text */}
                <div className="flex flex-col gap-2 items-center justify-between md:col-span-2 lg:p-4 leading-normal text-center md:text-left px-5 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gradient">
                        {casino.title}
                    </h5>
                    <div className="p-2 bg-red-500 rounded-xl flex justify-center items-center gap-2">
                        <Star className="text-white" />
                        <p className="text-white text-center font-bold ">
                            {casino.main_bonus_title}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="md:col-span-1 px-5">
                    <div className="flex flex-col items-center my-auto">
                        <RatingCircle rating={casino.rating} />
                        <span className="text-primary-400 font-bold">{t('rating')}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="md:col-span-1 flex justify-center w-full md:w-auto p-5 md:py-[unset] md:px-5">
                    <div className="flex flex-col gap-3 w-full lg:w-44">
                        <Button size="lg">
                            <Dices />
                            {t('playNow')}
                        </Button>
                        <Button size="lg" asChild variant={'outline'}>
                            <Link
                                href={{
                                    pathname: `${locale}/casino-review/${bonusrUrlFriendly(casino.title)}`,
                                    query: {
                                        id: casino.casino,
                                    },
                                }}
                            >
                                <Book />
                                {t('review')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CasinoTopCard
