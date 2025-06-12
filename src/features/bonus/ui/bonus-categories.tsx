'use client'

import { useQuery } from '@apollo/client'
import { PlusCircleIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import React, { useMemo, useState } from 'react'

import { BonusCategory, BonusCategoryCard } from '@/entities/bonus'
import { GET_ALL_BONUS_CATEGORIES } from '@/entities/bonus/model/bonus.schema'

import { Locale } from '@/shared/lib/i18n/routing'
import { useIsMobile } from '@/shared/lib/react/use-mobile'
import { Button } from '@/shared/ui/button'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

const BonusCategories = () => {
    const t = useTranslations('common')
    const clodsedLength = 6
    const locale = useLocale()
    const isMobile = useIsMobile()
    const [showAll, setShowAll] = useState(false)

    const { data, error } = useQuery(GET_ALL_BONUS_CATEGORIES, {
        variables: { locale },
    })

    const visibleCategories = useMemo(() => {
        if (isMobile) return data?.getAllBonusCategories ?? []
        return showAll
            ? (data?.getAllBonusCategories ?? [])
            : (data?.getAllBonusCategories ?? []).slice(0, clodsedLength)
    }, [data, isMobile, showAll])

    return (
        <div className="relative w-[calc(100%+1.25rem)] md:w-[unset]">
            <ScrollArea>
                <div className="flex flex-row py-2.5  md:[width:unset] md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 duration-300 transition-all">
                    {visibleCategories.map((category: BonusCategory) => (
                        <BonusCategoryCard
                            key={category.slug}
                            slug={category.slug}
                            coverImage={category.coverImage}
                            title={category.title}
                            locale={locale as Locale}
                        />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {!isMobile && (
                <div className="flex justify-center pt-4">
                    <Button
                        size="lg"
                        className="cursor-pointer"
                        onClick={() => setShowAll(!showAll)}
                    >
                        <PlusCircleIcon />
                        Show More
                    </Button>
                </div>
            )}
        </div>
    )
}

export default BonusCategories
