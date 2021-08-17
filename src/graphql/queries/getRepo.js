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

