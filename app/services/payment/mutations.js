import gql from 'graphql-tag'


// payment_ is the short name for the server
// name_ to easily identify the server talked to
export const payment_createPayment = gql`
  mutation payment_createPayment(
    $amount: Int!
    $application: String!
    $cardId: String!
    $currency: String!
    $token: String
    $userId: String!
  ) {
    payment_createPayment(
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
