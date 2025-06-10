import { fetchPageSeoInfoBySlug } from '@/entities/page-content'
import LoadingIndicator from '@/shared/components/loading-indicator/loading-indicator'
import { Locale } from '@/shared/lib/i18n/routing'
import { HomePage } from '@/views/home'
import { Metadata } from 'next/types'
import { Suspense } from 'react'

interface HomePageProps {
    params: Promise<{ locale: Locale }>
}

type Props = {
    params: Promise<{ locale: Locale }>
    searchParams: Promise<{ [key: string]: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const { title, description, keywords } = await fetchPageSeoInfoBySlug('/', locale)
    const year = new Date().getFullYear()

    return {
        title: `${title} | ${year}`,
        description,
        keywords,
    }
}

export default async function Home({ params }: HomePageProps) {
    const { locale } = await params

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <HomePage locale={locale} />
        </Suspense>
    )
}
