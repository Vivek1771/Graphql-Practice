import { gql } from "@apollo/client";

export const FWL_USER_LOGIN = gql`
  mutation userLogin(
    $Email: String!
    $Pw: String!
  ) {
    userLogin(input: {
        sMobNumber: $Email
        sPassword: $Pw
    })
  }
`;