import { ApolloClient, gql, InMemoryCache } from "@apollo/client";


export const SUBSCRIPTION = gql`
    subscription getApi{
    getApiTrigger{
      sApiName
      calledBy
    }
  }
`

export const CLIENT = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://fantasy-wl-graphql.herokuapp.com/graphql"
})
