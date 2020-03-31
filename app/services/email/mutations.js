import gql from 'graphql-tag'

// email_ is the short name for the server
// name_ to easily identify the server talked to
export const emailList_subscribe = gql`
  mutation emailList_subscribe(
    $email: String!
    $list: String!
    $locale: String!
    $application: String!
  ) {
    emailList_subscribe(
      email: $email
      list: $list
      locale: $locale
      application: $application
    ) {
      errors
    }
  }
`
