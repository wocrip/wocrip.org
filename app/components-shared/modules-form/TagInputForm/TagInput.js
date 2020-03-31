import PropTypes from 'prop-types'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'

import { styles } from 'theme'


const TagInput = styled.input.attrs(({ suggestions }) => ({
  type: 'text',
  autoComplete: isEmpty(suggestions) ? 'off' : 'nope',
}))`
  ${styles.tag.input}
`

TagInput.propTypes = {
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  closeButton: PropTypes.bool,
  loaderSize: PropTypes.number,
}

export default TagInput
