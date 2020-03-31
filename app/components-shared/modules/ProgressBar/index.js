import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from 'theme'


const Wrapper = styled.div`
  ${styles.button.progressWrapper}
`
const Progress = styled.div`
  ${styles.button.progress}
`

const ProgressBar = ({
  progress,
}) => (
  <Wrapper>
    <Progress progress={progress} />
  </Wrapper>
)

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar
