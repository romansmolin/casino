'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import dynamic from 'next/dynamic'

// Lazy-load ApolloNextAppProvider (only on the client)
const ApolloNextAppProvider = dynamic(
    () =>
        import('@apollo/experimental-nextjs-app-support/ssr').then(
            (mod) => mod.ApolloNextAppProvider
        ),
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
    throw (apolloModulesPromise ??= import('@apollo/experimental-nextjs-app-support/ssr').then(
        (mod) => {
            apolloModules = {
                NextSSRApolloClient: mod.NextSSRApolloClient,
                NextSSRInMemoryCache: mod.NextSSRInMemoryCache,
                SSRMultipartLink: mod.SSRMultipartLink,
            }
            return apolloModules
        }
    ))
}

// MakeClient function remains synchronous
function makeClient() {
    const { NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink } = getApolloModules()

    const httpLink = new HttpLink({
        uri: 'http://localhost:1337/graphql',
    })

    const authLink = setContext((_, { headers }) => {
        // Get the authentication token from environment variables
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            },
        }
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        getMenu: {
                            // Cache menu data for 5 minutes (300 seconds)
                            merge(existing: any, incoming: any) {
                                return incoming
                            },
                        },
                    },
                },
            },
        }),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-first',
                errorPolicy: 'all',
            },
            query: {
                fetchPolicy: 'cache-first',
                errorPolicy: 'all',
            },
        },
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      authLink,
                      httpLink,
                  ])
                : ApolloLink.from([authLink, httpLink]),
    })
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
