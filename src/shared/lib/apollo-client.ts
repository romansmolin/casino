import { ApolloClient, DocumentNode, HttpLink, InMemoryCache, OperationVariables, TypedDocumentNode } from "@apollo/client";
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.GRAPHQL_API_URL || 'http://localhost:1337/graphql',
            // uri: 'http://localhost:1337/graphql',
        }),
    });
});

// @ts-ignore
export const getServerQuery = async (schema: DocumentNode | TypedDocumentNode<any, OperationVariables>, variables: OperationVariables) => {
    const query = schema
    const { data, error } = await getClient().query({
		query,
		variables,
		fetchPolicy: "no-cache",
	});

    return { data, error }
}


