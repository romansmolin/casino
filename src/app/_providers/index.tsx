// import { ApolloProvider } from './apollo-provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import dynamic from 'next/dynamic'

import React, { ReactNode } from 'react'

import { SidebarProvider } from '@/shared/ui/sidebar'

import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
    children: ReactNode
}

const ApolloProvider = dynamic(() =>
    import('./apollo-provider').then((mod) => mod.ApolloProvider)
)

const Providers: React.FC<ProvidersProps> = async ({ children }) => {
    const messages = await getMessages()

    return (
        <ApolloProvider>
            <NextIntlClientProvider messages={messages}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SidebarProvider>{children}</SidebarProvider>
                </ThemeProvider>
            </NextIntlClientProvider>
        </ApolloProvider>
    )
}

export default Providers
