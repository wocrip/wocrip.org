import gql from 'graphql-tag'


export const HELP_ASK = gql`
  mutation help_ask(
    $amount: Int!
    $application: String!
    $cardId: String!
    $currency: String!
    $token: String
    $userId: String!
  ) {
    help_ask(
      amount: $amount
      application: $application
      cardId: $cardId
      currency: $currency
      token: $token
      userId: $userId
    ) {
      errors
    }
  }
`

export const HELP_OFFER = gql`
  mutation help_offer(
    $amount: Int!
    $application: String!
    $cardId: String!
    $currency: String!
    $token: String
    $userId: String!
  ) {
    help_offer(
      amount: $amount
      application: $application
      cardId: $cardId
      currency: $currency
      token: $token
      userId: $userId
    ) {
      errors
    }
  }
`
