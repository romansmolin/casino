import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui/card'
import BonusTypeBadge from './bonus-type-badge/bonus-type-badge'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

interface BonusCardProps {
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    casinoLogo: string
    info: BonusInfo
    uuid: string
    mainBonusTypeForUrl: string
}

const BonusCard: React.FC<BonusCardProps> = async ({ casinoName, bonusSubtitle, bonusTitle, casinoLogo, info, uuid, mainBonusTypeForUrl }) => {
    const locale = await getLocale()

    const userUrlFriendly = (str: string) => { 
        return str.replace(/\s+/g, '-').toLowerCase()
    }


    return (
        <Card className="w-full flex flex-col max-w-[305px] mx-auto min-w-[305px] lg:min-w-[unset] lg:max-w-[unset] p-5 lg:p-4 space-y-8 h-full">
            <CardHeader className='p-[unset]'>
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-primary w-full flex justify-center rounded-xl items-center">
                        <Image
                            src={casinoLogo}
                            alt={`${casinoName} logo`}
                            className="w-24 h-24"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="text-center">
                        <CardTitle>{casinoName}</CardTitle>
                        <p className="text-sm text-muted-foreground">{bonusSubtitle}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-8 !p-[unset] flex-grow">
                <h3 className="text-2xl font-bold text-center">{bonusTitle}</h3>
                <div className='flex gap-2 flex-wrap'>
                    {info.bonusType.map((type) => (
                        <BonusTypeBadge type={type} key={type}/>
                    ))}
                </div>
            </CardContent>
            <CardFooter className='p-[unset]'>
                <Button className="w-full" asChild>
                    <Link href={{
                        pathname: `/${locale}/${mainBonusTypeForUrl}/${userUrlFriendly(casinoName)}`,
                        query: { uuid }
                    }}> Claim Bonus</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default BonusCard
