import { FREE_SPINS_TYPES } from '@/entities/bonus'
import Typography from '@/shared/components/typography/typography'
import { cn } from '@/shared/lib/css'
import { Card, CardContent } from '@/shared/ui/card'
import { Gem } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'


const BonusFreeSpinsSection = async () => {
    const t = await getTranslations('common')
    const locale = await getLocale()

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                FREE_SPINS_TYPES.map((type) => (
                    <Link href={`/${locale}/category/${type.label}`} key={type.label}>
                        <Card className={cn('rounded-xl cursor-pointer p-4 flex-grow duration-300 ease-in-out transform md:hover:scale-105 md:hover:rotate-1', type.color)}>
                            <CardContent className='flex justify-center items-center gap-5 flex-col flex-grow'>
                                <Gem className='w-16 h-16 text-white'/>
                                <Typography as="h2" variant='h2' className='text-center text-white'>{t(type.label)}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))
            }
        </div>
    )
}

export default BonusFreeSpinsSection