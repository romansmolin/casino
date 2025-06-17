import {
    ApolloClient,
    DocumentNode,
    HttpLink,
    InMemoryCache,
    OperationVariables,
    TypedDocumentNode,
    from,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Server-side Apollo Client setup
let apolloClient: ApolloClient<any> | null = null

const createServerApolloClient = async () => {
    if (typeof window !== 'undefined') {
        return null // Client-side, return null
    }

    if (apolloClient) {
        return apolloClient // Return cached client
    }

    const { registerApolloClient } = await import(
        '@apollo/experimental-nextjs-app-support/rsc'
    )

    const { getClient } = registerApolloClient(() => {
        const httpLink = new HttpLink({
            uri: 'http://localhost:1337/graphql',
        })

        const authLink = setContext((_, { headers }) => {
            // Get the authentication token from environment variables
            const token = process.env.STRAPI_API_TOKEN

            return {
                headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : '',
                },
            }
        })

        return new ApolloClient({
            cache: new InMemoryCache(),
            link: from([authLink, httpLink]),
        })
    })

    apolloClient = getClient()
    return apolloClient
}

// Cache options interface
interface CacheOptions {
    revalidate?: number
    tags?: string[]
}

// @ts-ignore
export const getServerQuery = async (
    schema: DocumentNode | TypedDocumentNode<any, OperationVariables>,
    variables: OperationVariables,
    cacheOptions?: CacheOptions
) => {
    try {
        const client = await createServerApolloClient()
        if (!client) {
            throw new Error('Apollo client not available on client side')
        }

        const { data, errors } = await client.query({
            query: schema,
            variables,
            fetchPolicy: 'cache-first',
            context: {
                fetchOptions: {
                    next: {
                        revalidate: cacheOptions?.revalidate,
                        tags: cacheOptions?.tags || [],
                    },
                },
            },
        })

        if (errors && errors.length > 0) {
            console.error('GraphQL Errors:', errors)
            return { data: null, error: errors }
        }

        return { data, error: null }
    } catch (error) {
        console.error('Error in getServerQuery:', error)
        console.error(
            'Error trying use this scheme:',
            schema,
            ' with the following values: ',
            variables
        )

        return {
            data: null,
            error: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}
