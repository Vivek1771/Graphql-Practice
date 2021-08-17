import { gql } from "@apollo/client";
import { FRAGMENT } from "./fragment";


export const USER_PROFILE = gql`
${FRAGMENT}
  query Profile{
      getProfiles{
      ...Profile
    }
  }  
`