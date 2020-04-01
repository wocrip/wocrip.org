import styled from 'styled-components'


const UserImage = styled.div`
  user-select: none;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  overflow: hidden;

  svg, img {
    width: auto;
    height: 100%;
  }
`

export default UserImage
