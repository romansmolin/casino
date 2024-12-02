import React, { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { ApolloProvider } from './apollo-provider'
import { SidebarProvider } from '@/shared/ui/sidebar'
interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ApolloProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default Providers