import { ApolloClient, ApolloLink, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const wsLink = new WebSocketLink({
    uri: "ws://48p1r2roz4.sse.codesandbox.io",
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, splitLink]),
});
