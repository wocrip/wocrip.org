import { defineMessages } from 'react-intl'


const scope = 'components-shared.InputFile'

export default defineMessages({
  loadingError: {
    id: `${scope}.loadingError`,
    defaultMessage: 'Error loading the file, please try again.',
  },
  uploadError: {
    id: `${scope}.uploadError`,
    defaultMessage: 'Failed to upload file',
  },
  extensionError: {
    id: `${scope}.extensionError`,
    defaultMessage: 'File is not valid. Only accepted: {extensionText}.',
  },
  resizeError: {
    id: `${scope}.resizeError`,
    defaultMessage: 'Failed to resize image',
  },
  imageTooLittleError: {
    id: `${scope}.imageTooLittleError`,
    defaultMessage: 'Image size is too little',
  },
  or: {
    id: `${scope}.or`,
    defaultMessage: 'or',
  },
})
