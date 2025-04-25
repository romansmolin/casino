import { Button } from '@/shared/ui/button'
import { Card, CardHeader, CardFooter } from '@/shared/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'
import { getLocale, getTranslations } from 'next-intl/server'

interface CasinoCardProps {
    uuid: string
    name: string
    bonusTitle: string
    logoUrl: string
    features: string[]
    rating: number
    casinoType: string[]
}

const CasinoCard: React.FC<CasinoCardProps> = async ({ uuid, name, bonusTitle, logoUrl, rating }) => {
    const locale = await getLocale()
    const t = await getTranslations('casinoTopCard')

    return (
        <Card className="w-full space-y-5 border min-w-[250px] md:max-w-[305px] mx-auto md:min-w-[305px] lg:min-w-[unset] lg:max-w-[unset]">
            <CardHeader className="flex flex-col gap-4 items-center text-center p-[unset]">
                <div className="bg-primary w-full flex justify-center rounded-xl items-center">
                    <Image
                        src={logoUrl}
                        alt={`${name} logo`}
                        width={120}
                        height={120}
                        className="rounded-full mb-4"
                    />
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
                    <Link
                        href={{
                            pathname: `/${locale}/casino-review/${bonusrUrlFriendly(name)}`,
                            query: {
                                id: uuid,
                            },
                        }}>
                        {t('review')}
                    </Link>
                </Button>
                <Button className="w-full">Visit Casino</Button>
            </CardFooter>
        </Card>
    )
}

export default CasinoCard
