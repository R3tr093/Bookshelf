import gql from "graphql-tag";

export const ADD_USER_MUTATION = gql`
  mutation registerWithBasic(
    $target: UserTargetInput!
    $login: String!
    $pass: String!
    $useCookie: Boolean
  ) {
    registerWithBasic(
      target: $target
      login: $login
      pass: $pass
      useCookie: $useCookie
    ) {
      connected
      token
      headers
      csrfToken
    }
  }
`;