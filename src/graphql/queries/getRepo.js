import { ApolloClient, gql, InMemoryCache } from "@apollo/client";




export const REPOS_QUERY = gql`
  query repoQuery($after: String) {
    viewer {
      repositories(first: 5, after: $after) {
        edges {
          node {
            id
            name
          }
        }
        pageInfo {
          endCursor
        }
      }
    }
  }
`;

export const CLIENT = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer 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"
  },
  cache: new InMemoryCache()
});

