import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register(
    $Email: String!
    $Fname: String!
    $Lname: String!
    $Pw: String!
  ) {
    register(input: {
        sEmail: $Email
        sFirstName: $Fname
        sLastName: $Lname
        sPassword: $Pw
    })
  }
`;