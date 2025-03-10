import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui/card'
import BonusTypeBadge from './bonus-type-badge/bonus-type-badge'
import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { bonusrUrlFriendly } from '@/shared/utils/text-formaters'
import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'

interface BonusCardProps {
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    casinoLogo: string
    info: BonusInfo
    uuid: string
    primaryBonusType: string
    bonusCardClass?: string
}

const BonusCard: React.FC<BonusCardProps> = async ({ casinoName, bonusCardClass = '', bonusTitle, casinoLogo, info, uuid, primaryBonusType }) => {
    const locale = await getLocale()
    const t = await getTranslations('bonuses')

    return (
        <Card className={cn('w-full border flex flex-col max-w-[270px] min-w-[270px] md:max-w-[unset] mx-auto md:min-w-[305px]  lg:max-w-[unset] p-5 lg:p-4 space-y-5 h-full', bonusCardClass)}>
            <CardHeader className='p-[unset]'>
                <div className="bg-primary w-full flex justify-center rounded-xl items-center">
                    <Image
                        src={casinoLogo}
                        alt={`${casinoName} logo`}
                        className="w-24 h-24"
                        width={100}
                        height={100}
                        blurDataURL="https://placehold.co/405x405" 
                        priority
                    />
                </div>
            </CardHeader>

            <CardContent className="!p-[unset] !mt-1 flex-grow">
                <div className='flex flex-col space-y-4 py-6'>
                    <Typography variant='h3' as="h2" className='text-center'>{casinoName}</Typography>
                    <h3 className="text-2xl font-bold text-center">{bonusTitle}</h3>
                </div>

                <div className='flex gap-2 flex-wrap'>
                    {info.bonusType.map((type) => (
                        type !== 'free-spins-bonuses' && <BonusTypeBadge type={type} key={type} className='w-fit'/>
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
