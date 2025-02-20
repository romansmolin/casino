import { fetchPageContentBySlug, PageContentRenderer } from '@/entities/page-content'
import { NewsletterForm } from '@/features/newsletter'
import { Locale } from '@/shared/lib/i18n/routing'
import { getLocale } from 'next-intl/server'
import React from 'react'

const TermsAndConditionsPage = async () => {
    const locale = await getLocale()
    const { pageContent } = await fetchPageContentBySlug('terms-and-conditions', locale as Locale)
    return (
        <>
            <PageContentRenderer pageContent={pageContent} />
            <NewsletterForm />
        </>
    )
}

export default TermsAndConditionsPage