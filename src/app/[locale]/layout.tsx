import type { Metadata } from 'next'
import '../globals.css'
import { notFound } from 'next/navigation'
import { Locale, routing } from '@/shared/lib/i18n/routing'
import {setRequestLocale} from 'next-intl/server';
import BaseLayout from '../_layout/base-layout/base-layout'


export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: Locale }>
}>) {
    const { locale } = await params


    if (!routing.locales.includes(locale as any)) {
        console.log('locale should be catched')
        return notFound()
    }

    await setRequestLocale(locale);

    return (
        <BaseLayout locale={locale}>
            {children}
        </BaseLayout>
    )
}
