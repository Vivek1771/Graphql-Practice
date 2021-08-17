import { gql } from "@apollo/client";


export const SUBSCRIPTION = gql`
    subscription getApi{
    getApiTrigger{
      sApiName
      calledBy
    }
  }
`
