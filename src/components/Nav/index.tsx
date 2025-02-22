import styled from 'styled-components';
import { NavLinkData } from '../../data';
import { MAX_TABLET } from '../../utils';
import NavLink from '../NavLink';

const Nav = () => (
  <Container>
    {NavLinkData.map(({ link, text }) => (
      <NavLink key={text} link={link} text={text} />
    ))}
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 300px;
  @media (max-width: ${MAX_TABLET}){
    display: none;
  }
`
export default Nav