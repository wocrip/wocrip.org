import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import { rgba } from 'polished'
import styled from 'styled-components'

import { colors } from 'theme'

import Image from 'components-shared/basics/Image'
import IconAccountCircle from 'components-shared/icons/IconAccountCircle'
import Container from 'components-shared/basics/Container'

import UserImage from './UserImage'
import Username from './Username'


const Wrapper = styled(Box)`
  background: ${rgba(colors.gray, 0.05)};
`
const UserBox = styled(Flex)`
  align-items: center;
`
const HeaderProfile = ({
  Menu,
  user: { profile_picture, display_name, username },
  UserDetails,
}) => (
  <Wrapper>
    <Container pt={30} px={[10, 20, 40, 40]}>
      <UserBox>
        <UserImage>
          {profile_picture ?
            <Image
              src={profile_picture}
              alt="Profile Picture"
              width="100%"
              height="100%"
            />
            :
            <IconAccountCircle />
          }
        </UserImage>

        <Username>
          {display_name || username}
          {UserDetails && <UserDetails />}
        </Username>
      </UserBox>

      {Menu && <Menu />}
    </Container>

  </Wrapper>
)

HeaderProfile.propTypes = {
  Menu: PropTypes.func,
  user: PropTypes.object,
  UserDetails: PropTypes.func,
}

export default HeaderProfile
