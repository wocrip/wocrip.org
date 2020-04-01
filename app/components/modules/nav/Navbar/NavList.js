import styled from 'styled-components'


const NavList = styled.div`
  text-align: center;
  margin: 0 0 0 auto;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 830px) {
    display: none;
  }
`

export default NavList
