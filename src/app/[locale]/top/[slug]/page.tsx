import React, { Suspense } from 'react'

import { TopPage } from '@/views/top'

import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'

interface TopProps {
    params: Promise<{ slug: string; locale: Locale }>
}

const Top: React.FC<TopProps> = async ({ params }) => {
    const { locale, slug } = await params

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <TopPage locale={locale} slug={slug} />
        </Suspense>
    )
}

export default Top
