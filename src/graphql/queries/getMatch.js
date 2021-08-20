import { gql } from "@apollo/client";

export const GET_MATCH = gql`
    query getMatches( $Offset: Float ,$Limit: Float){
        getMatches(input: {nOffset: $Offset, nLimit: $Limit}){
          sName
          sVenue
          eCategory
        }    
    }
`