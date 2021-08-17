import gql from 'graphql-tag';

export const FRAGMENT = gql`
    fragment Profile on getProfiles {
        sEmail
        sFirstName
    }
`;
