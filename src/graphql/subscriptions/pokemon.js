import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const POKEMON = gql`
subscription Subscription_root {
    pokemon_v2_ability(input: {limit: 10}) {
      name
    }
  }
`

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://beta.pokeapi.co/graphql/v1beta"
})
