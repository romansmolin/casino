'use client'

import { useQuery } from '@apollo/client'
import { PlusCircleIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import React, { useMemo, useState } from 'react'

import { BonusCategory, BonusCategoryCard } from '@/entities/bonus'
import { CasinoCategoryCard, GET_ALL_CASINOS_CATEGORIES } from '@/entities/casino'

import { Locale } from '@/shared/lib/i18n/routing'
import { useIsMobile } from '@/shared/lib/react/use-mobile'
import { Button } from '@/shared/ui/button'
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area'

const CasinoCategories = () => {
    const t = useTranslations('common')
    const clodsedLength = 8
    const locale = useLocale()
    const isMobile = useIsMobile()
    const [showAll, setShowAll] = useState(false)

    const { data, error } = useQuery(GET_ALL_CASINOS_CATEGORIES, {
        variables: { locale },
    })

    const visibleCategories = useMemo(() => {
        if (isMobile) return data?.getAllCasinosCategories ?? []
        return showAll
            ? (data?.getAllCasinosCategories ?? [])
            : (data?.getAllCasinosCategories ?? []).slice(0, clodsedLength)
    }, [data, isMobile, showAll])

    return (
        <div className="w-[calc(100%+1.25rem)] md:w-[unset]">
            <ScrollArea className="pb-2.5">
                <div className="flex flex-row py-2.5  md:[width:unset] md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 duration-300 transition-all">
                    {visibleCategories.map((category: BonusCategory) => (
                        <CasinoCategoryCard
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

            {!isMobile && data?.getAllCasinosCategories.length > clodsedLength && (
                <div className="flex justify-center">
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

export default CasinoCategories
