import { Dice1, Dices } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import { CasinoTypeBadge } from '@/entities/casino'
import { CasinoType } from '@/entities/casino/model/casino.types'

import Typography from '@/shared/components/typography/typography'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'

interface CasinoHighlightProps {
    casinoName: string
    bonusTitle: string
    logo: string
    casinoType: CasinoType[]
    affiliateLink: string
}

const CasinoReviewCard: React.FC<CasinoHighlightProps> = ({
    casinoName,
    logo,
    bonusTitle,
    casinoType,
    affiliateLink,
}) => {
    return (
        <Card className="lg:w-1/3 h-full flex flex-col bento-block !p-0">
            <CardHeader className="!p-0">
                <div className="rounded-t-xl w-full h-[170px] bg-primary flex justify-center items-center">
                    <Image
                        width={300}
                        height={150}
                        src={logo}
                        alt={`${casinoName} logo`}
                        className="object-cover h-[150px]"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-between items-center space-y-6 grow p-5">
                <div className="space-y-6">
                    <div className="flex flex-col space-y-5">
                        <Typography as="h2" variant="h2" className="text-center">
                            {casinoName}
                        </Typography>
                        <Typography as="h3" variant="h3" className="text-center">
                            {bonusTitle}
                        </Typography>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {casinoType?.length > 0 &&
                            casinoType.map((type) => (
                                <CasinoTypeBadge type={type} key={type} />
                            ))}
                    </div>
                </div>

                {/* Push this to bottom */}
                <Button className="w-full" size="lg" asChild>
                    <Link href={affiliateLink}>
                        <Dices />
                        Play Now
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default CasinoReviewCard
