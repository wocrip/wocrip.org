import gql from 'graphql-tag'


export const payment_getCards = gql`
  query payment_getCards(
    $userId: String!
  ) {
    payment_getCards(
      userId: $userId
    ) {
      cards {
        id
        address_zip
        brand
        name
        exp_month
        exp_year
        last4
      }
      errors
    }
  }
`
