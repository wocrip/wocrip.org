import { defineMessages } from 'react-intl'


export default (translation, scope) => {
  const messages = {}
  const removeScope = (key) => key.replace(scope + '.', '')

  Object.entries(translation).map((entry) => {
    messages[removeScope(entry[0])] = {
      id: entry[0],
      defaultMessage: entry[1],
    }
  })

  // return defineMessages(messages)
}
