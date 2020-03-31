import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'

import { colors, settings, app } from 'theme'

import A from 'components-shared/basics/A'
import Image from 'components-shared/basics/Image'

import ServiceContainer from './ServiceContainer'
import { ceacleServices } from './ceacleServices'


const ALink = styled(A)`
  padding: 20px;
  border-radius: ${settings.radius}px;
  display: grid;
  grid-template-columns: 40px calc(100% - 50px);
  grid-gap: 10px;
  align-items: center;
  height: 100%;
  background: ${colors.white};

  @supports (backdrop-filter: saturate(180%) blur(10px)) {
    background: none;
  }

  @media (max-width: 750px) {
    padding: 10px 20px;
  }
`
const ServiceBox = styled.div`
  position: relative;
  padding: 10px;

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`
const TextBox = styled.div`
  align-self: center;
`
const Logo = styled.div`
  font-weight: 700;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-size: 1.4em;
  margin-bottom: 5px;
`
const Description = styled.span`
  font-size: 0.95em;
`
const ImageBox = styled.div`
  width: 30px;
`
const Badge = styled.div`
  font-size: 11px;
  padding: 4px 0 4px 4px;
  margin: 0 0 0 10px;
  color: ${({ color }) => color ? colors[color] : colors.yellow};
  display: inline;
  vertical-align: middle;
  font-family: acumin-pro-semi-condensed, sans-serif;
`
const ServicesList = ({
  intl,
  isOnPage,
  padding,
  reversed,
}) => {
  let services = ceacleServices(intl)
  if (!app.subApp) services = services.filter((group) => group.slug !== 'main')

  const content = services.map((group) => group.services.map(({
    name,
    link,
    image,
    status,
    statusColor,
    description,
  }) => (
    <ServiceBox
      key={name}
      itemScope
      itemType="http://schema.org/WebSite"
    >
      <ALink
        color={colors.black}
        href={link}
        noVisited
        itemProp="url"
      >
        <ImageBox>
          <Image
            src={image}
            alt={name}
            itemProp="image"
          />
        </ImageBox>

        <TextBox>
          <Logo
            size="h5"
            margin="0"
            itemProp="name"
          >
            {name}

            {status &&
              <Badge color={statusColor}>
                {status}
              </Badge>
            }
          </Logo>

          {description &&
            <Description
              itemProp="description"
            >
              {description}
            </Description>
          }
        </TextBox>
      </ALink>
    </ServiceBox>
  )))

  return (
    <ServiceContainer
      padding={padding}
      reversed={reversed}
      isOnPage={isOnPage}
    >
      {content}
    </ServiceContainer>
  )
}

ServicesList.propTypes = {
  intl: PropTypes.object,
  isOnPage: PropTypes.bool,
  padding: PropTypes.string,
  reversed: PropTypes.bool,
}

export default injectIntl(ServicesList)
