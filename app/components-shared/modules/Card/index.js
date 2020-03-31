import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import { styles } from 'theme'

import A from 'components-shared/basics/A'
import Image from 'components-shared/basics/Image'
import Text from 'components-shared/basics/Text'
import Title from 'components-shared/basics/Title'
import Badge from './Badge'


const Content = styled(Box)`
  padding: 1.2rem;
`
const StyledCard = styled(({
  button,
  cardLink,
  location,
  href,
  image,
  match,
  noShadow,
  noVisited,
  shrink,
  staticContext,
  secondStyle,
  to,
  ...rest
}) => {
  if (to) return <A noVisited to={to} {...rest} />
  if (href) return <A noVisited href={href} {...rest} />
  return <Box {...rest} />
})`${styles.card}`

const Card = ({
  align,
  badge,
  button,
  cardBorderColor,
  cardShadowColor,
  cardLink,
  href,
  image,
  link,
  margin,
  noShadow,
  secondStyle,
  shrink,
  text,
  textSize,
  title,
  to,
  ...rest
}) => (
  <StyledCard
    {...rest}
    align={align}
    button={button}
    cardBorderColor={cardBorderColor}
    cardShadowColor={cardShadowColor}
    cardLink
    href={href}
    image={image}
    margin={margin}
    shrink={shrink}
    secondStyle={secondStyle}
    noShadow={noShadow}
    to={to}
  >
    { image &&
      <Image src={image} alt={title} />
    }
    { badge &&
      <Badge>{badge}</Badge>
    }
    <Content>
      { title &&
        <Title
          size="h5"
          weight="500"
          align={align}
        >
          {title}
        </Title>
      }

      { text &&
        <Text
          align={align}
          margin="10px 0"
          size={textSize || 1}
        >
          {text}
        </Text>
      }

      { link &&
        <A
          align={align}
          href={link}
        >
          Visit
        </A>
      }
    </Content>
  </StyledCard>
)

Card.propTypes = {
  align: PropTypes.string,
  badge: PropTypes.string,
  button: PropTypes.string,
  cardBorderColor: PropTypes.string,
  cardShadowColor: PropTypes.string,
  cardLink: PropTypes.bool,
  href: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  margin: PropTypes.string,
  noShadow: PropTypes.bool,
  secondStyle: PropTypes.bool,
  shrink: PropTypes.bool,
  textSize: PropTypes.number,
  text: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
}

export default Card
