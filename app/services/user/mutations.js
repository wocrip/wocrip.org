import gql from 'graphql-tag'

// auth_ is the short name for the server
// name_ to easily identify the server talked to
export const auth_getToken = gql`
  mutation auth_getToken(
    $identifier: String!
    $password: String!
    $locale: String
    $gpu: String
  ) {
    auth_getToken(
      identifier: $identifier
      password: $password
      locale: $locale
      gpu: $gpu
    ) {
      token
      user {
        _id
        emails
        username
        display_name
        first_name
        last_name
        locale
        createdAt
      }
      errors
    }
  }
`

export const auth_confirm = gql`
  mutation auth_confirm(
    $token: String!
    $type: String!
    $locale: String
  ) {
    auth_confirm(
      token: $token
      type: $type
      locale: $locale
    ) {
      errors
    }
  }
`

export const AUTH_SEND_CONFIRMATION_EMAIL = gql`
  mutation auth_sendConfirmationEmail(
    $_id: String!
    $locale: String
  ) {
    auth_sendConfirmationEmail(
      _id: $_id
      locale: $locale
    ) {
      errors
    }
  }
`

export const auth_sendConfirmationEmail = gql`
  mutation auth_sendConfirmationEmail(
    $_id: String!
    $locale: String
  ) {
    auth_sendConfirmationEmail(
      _id: $_id
      locale: $locale
    ) {
      errors
    }
  }
`

export const auth_deleteAccount = gql`
  mutation auth_deleteAccount(
    $_id: String!
    $username: String!
    $locale: String
  ) {
    auth_deleteAccount(
      _id: $_id
      username: $username
      locale: $locale
    ) {
      errors
    }
  }
`

export const auth_resetPassword = gql`
  mutation auth_resetPassword(
    $password: String!
    $token: String!
    $locale: String
  ) {
    auth_resetPassword(
      password: $password
      token: $token
      locale: $locale
    ) {
      user {
        _id
        emails
        username
        display_name
        first_name
        last_name
        locale
        createdAt
      }
      token
      errors
    }
  }
`

export const auth_emailForgottenPassword = gql`
  mutation auth_emailForgottenPassword(
    $email: String!
    $locale: String
  ) {
    auth_emailForgottenPassword(
      email: $email
      locale: $locale
    ) {
      errors
    }
  }
`

export const auth_availability = gql`
  mutation auth_availability(
    $identifier: String!
    $_id: String
    $locale: String
  ) {
    auth_availability(
      identifier: $identifier
      _id: $_id
      locale: $locale
    ) {
      isAvailable
      errors
    }
  }
`
export const auth_createUser = gql`
  mutation auth_createUser(
    $consentToNewsletter: Boolean
    $email: String!
    $locale: String!
    $password: String!
    $username: String!
    $gpu: String
  ) {
    auth_createUser(
      consentToNewsletter: $consentToNewsletter
      email: $email
      locale: $locale
      password: $password
      username: $username
      gpu: $gpu
    ) {
      token
      user {
        _id
        emails
        username
        display_name
        first_name
        last_name
        locale
        createdAt
      }
      errors
    }
  }
`

export const auth_fromProviderToGetToken = gql`
  mutation auth_fromProviderToGetToken(
    $accessToken: String!
    $email: String!
    $consentToNewsletter: Boolean
    $display_name: String!
    $first_name: String
    $last_name: String
    $locale: String!
    $mode: String!
    $profile_picture: String
    $provider: String!
    $user_id: String!
    $gpu: String
  ) {
    auth_fromProviderToGetToken(
      accessToken: $accessToken
      consentToNewsletter: $consentToNewsletter
      email: $email
      display_name: $display_name
      first_name: $first_name
      last_name: $last_name
      locale: $locale
      mode: $mode
      profile_picture: $profile_picture
      provider: $provider
      user_id: $user_id
      gpu: $gpu
    ) {
      token
      errors
    }
  }
`

export const auth_connectProvider = gql`
  mutation auth_connectProvider(
    $_id: String!
    $provider: String!
    $accessToken: String!
    $email: String!
    $display_name: String!
    $first_name: String
    $last_name: String
    $user_id: String!
    $profile_picture: String
    $locale: String
  ) {
    auth_connectProvider(
      _id: $_id
      provider: $provider
      accessToken: $accessToken
      email: $email
      display_name: $display_name
      first_name: $first_name
      last_name: $last_name
      user_id: $user_id
      profile_picture: $profile_picture
      locale: $locale
    ) {
      errors
    }
  }
`

export const auth_updateUser = gql`
  mutation auth_updateUser(
    $_id: String!
    $email: String
    $username: String
    $display_name: String
    $first_name: String
    $last_name: String
    $profile_picture: String
    $password_old: String
    $password: String
    $password_add: String
    $locale: String
  ) {
    auth_updateUser(
      _id: $_id
      email: $email
      username: $username
      display_name: $display_name
      first_name: $first_name
      last_name: $last_name
      profile_picture: $profile_picture
      password_old: $password_old
      password: $password
      password_add: $password_add
      locale: $locale
    ) {
      errors
    }
  }
`
