import Providers from '@/app/_providers'
import dynamic from 'next/dynamic'
// import { AppSidebar } from '../sidebar/sidebar'
import { Nunito } from 'next/font/google'

import React, { ReactNode } from 'react'

import { Locale } from '@/shared/lib/i18n/routing'
import { SidebarInset } from '@/shared/ui/sidebar'
import { Toaster } from '@/shared/ui/toaster'

import Header from '../header/header'

const AppSidebar = dynamic(() => import('../sidebar/ui/sidebar'))

const nunito = Nunito({
    weight: '600',
    subsets: ['cyrillic'],
    display: 'swap',
})

const BaseLayout = ({ locale, children }: { locale: Locale; children: ReactNode }) => {
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={nunito.className}>
                <Providers>
                    <AppSidebar />
                    <SidebarInset className="w-full">
                        <Header />
                        <div className="flex flex-1 flex-col gap-4 p-2 md:p-4 pt-0 ">
                            {children}
                        </div>
                    </SidebarInset>
                </Providers>
                <Toaster />
            </body>
        </html>
    )
}

export default BaseLayout
