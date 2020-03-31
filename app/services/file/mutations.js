import gql from 'graphql-tag'

// file_ is the short name for the server
// name_ to easily identify the server talked to
export const file_getSignedUrlProfilePicture = gql`
  mutation file_getSignedUrlProfilePicture(
    $fileName: String!
    $fileType: String!
    $dimensions: String!
  ) {
    file_getSignedUrlProfilePicture(
      fileName: $fileName
      fileType: $fileType
      dimensions: $dimensions
    ) {
      signedRequest
      url
      errors
    }
  }
`
export const file_getSignedUrlMockupPrivate = gql`
  mutation file_getSignedUrlMockup(
    $fileName: String!
    $fileType: String!
    $dimensions: String
  ) {
    file_getSignedUrlMockup(
      fileName: $fileName
      fileType: $fileType
      dimensions: $dimensions
      usage: "mockupPrivate"
    ) {
      signedRequest
      url
      errors
    }
  }
`
export const file_getSignedUrlMockupPublic = gql`
  mutation file_getSignedUrlMockup(
    $fileName: String!
    $fileType: String!
    $dimensions: String
  ) {
    file_getSignedUrlMockup(
      fileName: $fileName
      fileType: $fileType
      dimensions: $dimensions
      usage: "mockupPublic"
    ) {
      signedRequest
      url
      errors
    }
  }
`
