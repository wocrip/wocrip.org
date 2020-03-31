import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import { injectIntl } from 'react-intl'

import A from 'components-shared/basics/A'
import TitleDisplay from 'components-shared/basics/TitleDisplay'
import Section from 'components-shared/basics/Section'
import Text from 'components-shared/basics/Text'
import messages from './messages'


const ComingPage = ({
  reversed,
  align,
  small,
  textColor,
  title,
  size,
  intl,
}) => (
  <Section
    flexWrap="wrap"
    reversed={reversed}
    py={100}
  >
    <Box width={1} px={[30, 50, 80]}>
      <TitleDisplay
        size={size && size}
        align={align && align}
        small={small && small}
        color={textColor && textColor}
      >
        {title && title}
      </TitleDisplay>
    </Box>
    <Box width={1} px={[30, 50, 80]} mt={-20} mb={30}>
      <Text
        to="/"
        align={align && align}
      >
        <A to="/">
          {intl.formatMessage(messages.backHome)}
        </A>
      </Text>
    </Box>
  </Section>
)

ComingPage.propTypes = {
  align: PropTypes.string,
  intl: PropTypes.object,
  size: PropTypes.string.isRequired,
  reversed: PropTypes.bool,
  small: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default injectIntl(ComingPage)
