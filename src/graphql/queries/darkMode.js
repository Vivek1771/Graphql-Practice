
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { makeVar } from "@apollo/client";

const isDarkModeVar = makeVar(true);

export const toggleDarkMode = () => {
    const current = isDarkModeVar();
    isDarkModeVar(!current);
};


const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isDarkMode: {
                    read() {
                        return isDarkModeVar();
                    },
                },
            },
        },
    },
});

export const CLIENT = new ApolloClient({
    cache: cache,
    connectToDevTools: true,
});


export const DARK = gql`
  query getDarkMode {
    isDarkMode @client
  }
`;
