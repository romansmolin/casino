import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui/card'
import BonusTypeBadge from './bonus-type-badge/bonus-type-badge'
import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'

interface BonusCardProps {
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    casinoLogo: string
    info: BonusInfo
    uuid: string
    primaryBonusType: string
}

const BonusCard: React.FC<BonusCardProps> = async ({ casinoName, bonusSubtitle, bonusTitle, casinoLogo, info, uuid, primaryBonusType }) => {
    const locale = await getLocale()
    const t = await getTranslations('bonuses')
    
    return (
        <Card className="w-full border flex flex-col max-w-[250px] min-w-[250px] md:max-w-[unset] mx-auto md:min-w-[305px]  lg:max-w-[unset] p-5 lg:p-4 space-y-8 h-full">
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
                        <CardTitle className='text-2xl'>{casinoName}</CardTitle>
                        {/* <p className="text-sm text-muted-foreground">{bonusSubtitle}</p> */}
                    </div>
                </div>
            </CardHeader>
            
            <CardContent className="space-y-8 !p-[unset] !mt-2 flex-grow">
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
                        pathname: `/${locale}/${bonusrUrlFriendly(primaryBonusType)}/${bonusrUrlFriendly(casinoName)}`,
                        query: { uuid }
                    }}>{t('claim-bonus')}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default BonusCard
