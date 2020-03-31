import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'

import Section from 'components-shared/basics/Section'
import TitleDisplay from 'components-shared/basics/TitleDisplay'
import HeaderImage from './HeaderImage'
import BackgroundSVG from './BackgroundSVG'


const StyledSection = styled(({ additionalStyle, ...rest }) =>
  <Section {...rest} />)`
  position: relative;

  ${({ additionalStyle }) => additionalStyle && additionalStyle}
`
const HeaderHome = ({
  additionalStyle,
  align,
  backgroundSVG,
  image,
  padding,
  reversed,
  spaceTop,
  spaceBottom,
  sub,
  subBold,
  subComponent: SubComponent,
  subNoColor,
  subMultiLine,
  textSize,
  textColor,
  title,
  titleProps,
  width,
}) => (
  <StyledSection
    flexWrap="wrap"
    reversed={reversed}
    additionalStyle={additionalStyle}
    flexDirection="column"
  >
    { spaceTop &&
      <Box
        width={10}
        mt={[60, 80, 100, 200]}
      />
    }


    <Box
      width={width || [1, 1, 1]}
      px={[30, 50, 80]}
      mx={align === 'center' ? 'auto' : null}
    >
      {title &&
        <TitleDisplay
          size={textSize || 'h1'}
          sub={sub && sub}
          color={textColor && textColor}
          align={align}
          subBold={subBold && subBold}
          subNoColor={subNoColor && subNoColor}
          subMultiLine={subMultiLine && subMultiLine}
          padding={padding || '100px 0'}
          zIndex={1}
          {...titleProps}
        >
          {title}
        </TitleDisplay>
      }

      {SubComponent &&
        <SubComponent />
      }
    </Box>

    { backgroundSVG &&
      <BackgroundSVG
        image={backgroundSVG}
        reversed={reversed}
      />
    }

    { image &&
      <HeaderImage
        image={image}
        reversed={reversed}
      />
    }

    { spaceBottom &&
      <Box
        width={10}
        mb={[40, 60, 80, 100]}
      />
    }
  </StyledSection>
)

HeaderHome.propTypes = {
  additionalStyle: PropTypes.any,
  align: PropTypes.string,
  backgroundSVG: PropTypes.func,
  image: PropTypes.func,
  padding: PropTypes.string,
  reversed: PropTypes.bool,
  spaceBottom: PropTypes.bool,
  spaceTop: PropTypes.bool,
  sub: PropTypes.string,
  subBold: PropTypes.bool,
  subComponent: PropTypes.any,
  subMultiLine: PropTypes.bool,
  subNoColor: PropTypes.bool,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.any,
  titleProps: PropTypes.object,
}

export default HeaderHome
