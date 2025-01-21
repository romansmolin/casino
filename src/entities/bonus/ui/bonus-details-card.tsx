import { Card, CardContent } from '@/shared/ui/card'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { BookOpenCheck, Play } from 'lucide-react'
import Typography from '@/shared/components/typography/typography'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'


interface BonusDetailsCardProps {
    bonusLogo: string
    bonusTitle: string
    bonusSubtitle: string
    bonusStatus: 'active' | 'inactive'
    casinoName: string
    casinoUuid: string
}

const BonusDetailsCard: React.FC<BonusDetailsCardProps> = async ({
    bonusLogo,
    bonusTitle,
    bonusSubtitle,
    bonusStatus,
    casinoUuid,
    casinoName
}) => {
    const locale = await getLocale()

    const getUserFriendlyUrl = (name: string) => {
        return name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
    };

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
                    <Button size={'lg'} className='bg-accent text-accent-foreground hover:text-white' asChild>
                        <div className='bg-accent text-accent-foreground hover:text-white flex'>
                            <BookOpenCheck />
                            <Link href={{
                                pathname: `/${locale}/casino-review/${getUserFriendlyUrl(casinoName)}`,
                                query: {
                                    id: casinoUuid,
                                },
                            }}>Read Review!</Link>
                        </div>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default BonusDetailsCard