import dynamic from 'next/dynamic'
import Providers from '@/app/_providers'
import { SidebarInset } from '@/shared/ui/sidebar'
import React, { ReactNode } from 'react'
import Header from '../header/header'
// import { AppSidebar } from '../sidebar/sidebar'
import { Nunito } from 'next/font/google'
import { Locale } from '@/shared/lib/i18n/routing'
import { Toaster } from '@/shared/ui/toaster'

const AppSidebar = dynamic(() => import('../sidebar/sidebar'))

const nunito = Nunito({
    weight: '600',
    subsets: ['cyrillic'], 
  });

const BaseLayout = ({locale, children}: {locale: Locale, children: ReactNode}) => {
    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={nunito.className}>
            <Providers>
                <AppSidebar />
                <SidebarInset className='w-full'>
                    <Header />
                    <div className="flex flex-1 flex-col gap-4 p-2 md:p-4 pt-0 ">
                        {children}
                    </div>
                </SidebarInset>
            </Providers>
            <Toaster/>
        </body>
    </html>
    )
}

export default BaseLayout