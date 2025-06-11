import { BonusGrid, fetchBonusesByType } from '@/entities/bonus'
import { BonusCategoryType } from '@/entities/bonus/model/bonus.types'
import PaginationControl from '@/shared/components/pagination-control/pagination-control'
import Typography from '@/shared/components/typography/typography'
import { Locale } from '@/shared/lib/i18n/routing'
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/card'
import { FrownIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'

interface BonusGridWithPaginationProps {
    currentPage: number
    bonusCategory: string
}

const BonusGridWithPagination: React.FC<BonusGridWithPaginationProps> = async ({
    currentPage,
    bonusCategory,
}) => {
    const locale = await getLocale()
    const t = await getTranslations('bonus-category')
    const { bonuses, totalPages } = await fetchBonusesByType(currentPage, 6, bonusCategory, locale as Locale)

    if (bonuses?.length === 0) return <NoBonusesFound />

    return (
        <section className="bento-block space-y-5">
            <Typography as="h2" variant="h1">
                {t(bonusCategory)}
            </Typography>
            <BonusGrid bonuses={bonuses} bonusCardClass="max-w-[unset] min-w-[unset]" />
            <PaginationControl totalPages={totalPages} currentPage={currentPage} />
        </section>
    )
}

export default BonusGridWithPagination

const NoBonusesFound = () => {
    return (
        <section className="bento-block space-y-5 h-[98%] flex justify-center items-center">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">No Bonuses Found</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                        <FrownIcon className="w-16 h-16 text-gray-400" />
                        <p className="text-center text-gray-600">
                            We&apos;re sorry, but we couldn&apos;t find any bonuses for you at this time.
                            Please check back later for new offers.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
