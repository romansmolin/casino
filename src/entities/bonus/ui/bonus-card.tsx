import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui/card'
import { Badge } from '@/shared/ui/badge'
import BonusTypeBadge from './bonus-type-badge'

interface BonusCardProps {
    casinoName: string
    casinoUuid: string
    bonusSubtitle: string
    bonusTitle: string
    uuid: string
    casinoLogo: string
    info: BonusInfo
}

const BonusCard: React.FC<BonusCardProps> = ({ casinoName, bonusSubtitle, bonusTitle, casinoLogo, info }) => {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="p-4">
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
            <CardContent className="space-y-8">
                <h3 className="text-2xl font-bold text-center">{bonusTitle}</h3>
                <div className='flex gap-2 flex-wrap'>
                    {info.bonusType.map((type) => (
                        <BonusTypeBadge type={type} key={type}/>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Claim Bonus</Button>
            </CardFooter>
        </Card>
    )
}

export default BonusCard
