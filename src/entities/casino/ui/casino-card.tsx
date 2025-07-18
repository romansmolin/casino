import { Book, Eye, Star } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import { Button } from '@/shared/ui/button'
import { Card, CardFooter, CardHeader } from '@/shared/ui/card'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'

interface CasinoCardProps {
    uuid: string
    name: string
    bonusTitle: string
    logoUrl: string
    features: string[]
    rating: number
    casinoType: string[]
    slug: string
    affiliateLink: string
}

const CasinoCard: React.FC<CasinoCardProps> = async ({
    uuid,
    name,
    bonusTitle,
    logoUrl,
    rating,
    slug,
    affiliateLink,
}) => {
    const locale = await getLocale()
    const t = await getTranslations('casinoTopCard')

    return (
        <Card className="w-full space-y-5 border min-w-[250px] md:max-w-[305px] mx-auto md:min-w-[305px] lg:min-w-[unset] lg:max-w-[unset] overflow-hidden hover:shadow-lg  cursor-pointer">
            <CardHeader className="flex flex-col gap-4 items-center text-center p-[unset]">
                <div className="bg-primary w-full flex justify-center items-center max-h-[90px] min-h-[90px]">
                    <Image src={logoUrl} alt={`${name} logo`} width={150} height={150} />
                </div>

                <div className="px-5 lg:px-4">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-sm text-muted-foreground">{bonusTitle}</p>
                </div>

                <div className="flex items-center px-5 lg:px-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-bold">{rating}/100</span>
                </div>
            </CardHeader>

            <CardFooter className="flex flex-col space-y-2 px-5 lg:px-4">
                <Button size="lg" className="w-full" variant="outline" asChild>
                    <Link href={`/${locale}/casino-review/${slug}`}>
                        <Book />
                        {t('review')}
                    </Link>
                </Button>
                <Button
                    className="w-full relative cursor-pointer transition-all "
                    size="lg"
                    asChild
                >
                    <Link href={affiliateLink} className="z-10 flex gap-2 items-center">
                        <Eye />
                        Visit Casino
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CasinoCard
