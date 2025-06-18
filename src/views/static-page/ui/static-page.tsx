import { notFound } from 'next/navigation'

import React from 'react'

import { PageContentRenderer, fetchPageContentBySlug } from '@/entities/page-content'

import type { Locale } from '@/shared/lib/i18n/routing'

const StaticPage = async ({ slug, locale }: { slug: string; locale: Locale }) => {
    const { pageContent, error } = await fetchPageContentBySlug(slug, locale)

    if (!pageContent || error) notFound()

    return <PageContentRenderer pageContent={pageContent} />
}

export default StaticPage
