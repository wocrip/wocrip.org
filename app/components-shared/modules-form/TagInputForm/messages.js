import { defineMessages } from 'react-intl'


const scope = 'components-shared.TagInputForm'

export default defineMessages({
  validAtLeastChar: {
    id: `${scope}.validAtLeastChar`,
    defaultMessage: 'Must be at least {number} characters',
  },
  validNoMoreChar: {
    id: `${scope}.validNoMoreChar`,
    defaultMessage: 'Must be no more than {number} characters',
  },
  validOnlyCharTag: {
    id: `${scope}.validOnlyCharTagName`,
    defaultMessage: 'Only characters a-z and 0-9.',
  },
  validMultipleSpacesNotAllowed: {
    id: `${scope}.validMultipleSpacesNotAllowed`,
    defaultMessage: 'Multiple spaces are not allowed',
  },
  addOnlyFromSuggestion: {
    id: `${scope}.addOnlyFromSuggestion`,
    defaultMessage: 'Add only from suggestion',
  },
  maximumAllowed: {
    id: `${scope}.maximumAllowed`,
    defaultMessage: 'Maximum allowed: {count}',
  },
})
