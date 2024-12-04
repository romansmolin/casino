import React, { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { ApolloProvider } from './apollo-provider'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = async ({ children }) => {

    const messages = await getMessages();
    
    return (
        <ApolloProvider>
            <NextIntlClientProvider messages={messages}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SidebarProvider>{children}</SidebarProvider>
                </ThemeProvider>
            </NextIntlClientProvider>
        </ApolloProvider>
    )
}

export default Providers
