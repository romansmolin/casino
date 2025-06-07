'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import dynamic from 'next/dynamic'

// Lazy-load ApolloNextAppProvider (only on the client)
const ApolloNextAppProvider = dynamic(
    () => import('@apollo/experimental-nextjs-app-support/ssr').then((mod) => mod.ApolloNextAppProvider),
    { ssr: false }
)

// Store Apollo modules once loaded
let apolloModules: {
    NextSSRApolloClient: any
    NextSSRInMemoryCache: any
    SSRMultipartLink: any
} | null = null

// Use a cached Promise to prevent duplicate loads
let apolloModulesPromise: Promise<typeof apolloModules> | null = null

// Load Apollo modules (synchronously after first async call)
const getApolloModules = () => {
    if (apolloModules) return apolloModules // Return cached modules if already loaded
    // @ts-ignore
    throw (apolloModulesPromise ??= import('@apollo/experimental-nextjs-app-support/ssr').then((mod) => {
        apolloModules = {
            NextSSRApolloClient: mod.NextSSRApolloClient,
            NextSSRInMemoryCache: mod.NextSSRInMemoryCache,
            SSRMultipartLink: mod.SSRMultipartLink,
        }
        return apolloModules
    }))
}

// MakeClient function remains synchronous
function makeClient() {
    const { NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink } = getApolloModules()

    const httpLink = new HttpLink({
        uri: 'http://localhost:1337/graphql',
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    })
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
