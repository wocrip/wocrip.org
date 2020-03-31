import styled from 'styled-components'


const NavList = styled.div`
  margin: 0;
  padding: 10px 10px;
  width: 100%;
  border-radius: 4px;
  transition: all 0.3s ease;

  @media (max-width: 830px) {
    max-height: 0;
    overflow: hidden;
    opacity: 0;

    &.open {
      margin-top: 0px;
      opacity: 1;
      max-height: 5000px;
    }
  }
`

export default NavList
