import { getLocale } from 'next-intl/server'

import React from 'react'

import { NewsletterForm } from '@/features/newsletter'

import { PageContentRenderer, fetchPageContentBySlug } from '@/entities/page-content'

import { Locale } from '@/shared/lib/i18n/routing'

const AboutUsPage = async () => {
    const locale = await getLocale()
    const { pageContent } = await fetchPageContentBySlug('about-us', locale as Locale)

    return (
        <>
            <PageContentRenderer pageContent={pageContent} />
            <NewsletterForm />
        </>
    )
}

export default AboutUsPage
