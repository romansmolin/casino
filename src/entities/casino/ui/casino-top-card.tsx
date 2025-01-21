import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import RatingCircle from '@/shared/components/rating-circle/rating-circle'
import { getLocale, getTranslations } from 'next-intl/server'
import { Card, CardContent } from '@/shared/ui/card'

const getUserFriendlyUrl = (name: string) => {
    return name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
};


const CasinoTopCard = async ({ casino }: { casino: CasinoTopEntry }) => {
    const t = await getTranslations("casinoTopCard")
    const locale = await getLocale()
    return (
        <Card>
            <CardContent className="max-w-[250px] min-w-[250px] md:max-w-[unset] grid grid-cols-1 md:grid-cols-5 justify-between gap-4 p-5 items-center rounded-xl box-border border shadow-none">
                {/* Logo */}
                <div className="md:col-span-1 h-[170px] bg-primary p-4 rounded-xl flex items-center justify-center">
                    <div className="w-full md:w-[150px] h-full flex justify-center items-center">
                        <Image src={casino.logo} alt={`${casino.title} Logo`} width={150} height={150} />
                    </div>
                </div>

                {/* Text */}
                <div className="md:col-span-2 flex flex-col items-center justify-between lg:p-4 leading-normal text-center md:text-left">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gradient">{casino.title}</h5>
                    <p className="mb-3 text-primary-400 text-center font-bold">{casino.main_bonus_title}</p>
                </div>

                {/* Rating */}
                <div className="md:col-span-1">
                    <div className="flex flex-col items-center my-auto">
                        <RatingCircle rating={casino.rating} />
                        <span className="text-primary-400 font-bold">{t('rating')}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="md:col-span-1 flex justify-center w-full md:w-auto">
                    <div className="flex flex-col gap-3 w-full lg:w-44">
                        <Button size="lg">{t('playNow')}</Button>
                        <Button size="lg" asChild>
                            <Link
                                href={{
                                    pathname: `${locale}/casino-review/${getUserFriendlyUrl(casino.title)}`,
                                    query: {
                                        id: casino.casino,
                                    },
                                }}
                            >
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