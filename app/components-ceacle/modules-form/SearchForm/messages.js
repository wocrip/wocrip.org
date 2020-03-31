// import generateMessages from 'services/intl/generateMessages'
import { defineMessages } from 'react-intl'
// import en from './translations/en.json'

const scope = 'SearchForm'
// const translation = en

// export default generateMessages(translation, scope)
export default defineMessages({
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
})
