import { ApolloClient, DocumentNode, HttpLink, InMemoryCache, OperationVariables, TypedDocumentNode } from "@apollo/client";
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://localhost:1337/graphql',
            // uri: 'http://localhost:1337/graphql',
        }),
        
    });
});

// @ts-ignore
export const getServerQuery = async (
    schema: DocumentNode | TypedDocumentNode<any, OperationVariables>,
    variables: OperationVariables
) => {
    try {
        const { data, errors } = await getClient().query({
            query: schema,
            variables,
            fetchPolicy: "no-cache",
        });

        if (errors && errors.length > 0) {
            console.error("GraphQL Errors:", errors);
            return { data: null, error: errors };
        }

        return { data, error: null };
    } catch (error) {
        console.error("Error in getServerQuery:", error);
        console.error("Error trying use this scheme:", schema, " with the following values: ", variables);

        return {
            data: null,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};


