import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const CLIENT = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com/",
  cache: new InMemoryCache()
})




export const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name,
      country
      weather {
        summary {
          description
        }
        temperature {
          actual
        }
        wind {
          speed
        }
      }
    }
  }
`;
