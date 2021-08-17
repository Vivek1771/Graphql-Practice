import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation userLogin(
    $Email: String!
    $Pw: String!
    $Remember: Boolean
  ) {
    userLogin(input: {
        sEmail: $Email
        sPassword: $Pw
        bIsRememberMe: $Remember
    })
  }
`;