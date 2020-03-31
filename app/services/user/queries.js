import gql from 'graphql-tag'


const userCommonFields = `
  _id
  emails
  username
  display_name
  first_name
  last_name
  profile_picture
  locale
  roles
  createdAt
`
// auth_ is the short name for the server
// name_ to easily identify the server talked to
export const auth_getUser = gql`
  query auth_getUser(
    $_id: String!
    $account: Boolean
  ) {
    auth_getUser(
      _id: $_id
      account: $account
    ) {
      ${userCommonFields}
    }
  }
`
export const auth_getUserAccount = gql`
  query auth_getUser(
    $_id: String!
    $account: Boolean
  ) {
    auth_getUser(
      _id: $_id
      account: $account
    ) {
      ${userCommonFields}
      hasPassword
      providers
    }
  }
`
