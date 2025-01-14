import { Card, CardContent } from '@/shared/ui/card'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { BookOpenCheck, Play } from 'lucide-react'
import Typography from '@/shared/components/typography/typography'


interface BonusDetailsCardProps {
    bonusLogo: string
    bonusTitle: string
    bonusSubtitle: string
    bonusStatus: 'active' | 'inactive'
    casinoName: string
}

const BonusDetailsCard: React.FC<BonusDetailsCardProps> = ({
    bonusLogo,
    bonusTitle,
    bonusSubtitle,
    bonusStatus,
    casinoName
}) => {
    return (
        <Card>
            <CardContent className='flex flex-col gap-5 lg:gap-[unset] lg:flex-row justify-between items-center bento-block'>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    <div className='rounded-xl w-full bg-primary flex justify-center items-centers'>
                        <Image
                            src={bonusLogo}
                            alt={bonusTitle}
                            width={180}
                            height={150}
                        />
                    </div>
                    <div className='space-y-2'>
                        <Typography as="h1" variant='h1'>{casinoName}</Typography>
                        <Typography as="h2" variant='h2' nowrap>{bonusSubtitle}</Typography>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <Button size={'lg'} className='flex gap-2 items-center'> 
                        <Play />
                        <p>Get Bonus Now!</p>
                    </Button>
                    <Button size={'lg'} className='bg-accent text-accent-foreground hover:text-white'>
                        <BookOpenCheck />
                        <p>Read Review!</p>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default BonusDetailsCard