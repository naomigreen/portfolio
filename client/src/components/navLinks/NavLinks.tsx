import { NavLink } from "react-router-dom";
import { links } from '../../data/data';
import styled from 'styled-components';

const Links = () => (
  <Nav>
    {links.map((link) => (
      <LinkList key={link.name}>
        <Link className={({ isActive }) =>
          isActive ? 'active' : ''
        } to={link.route}>
          {link.name}
        </Link>
      </LinkList>
    ))}
  </Nav>
)

const Nav = styled.ul`
  width: 450px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const LinkList = styled.li`
margin: 0 5px;
.active {
  color: ${props => props.theme.active};
}
`;

const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  display: inline-block;
  border-bottom: 2px solid #0000;
  padding: 10px 0;
  color: ${props => props.theme.navText};
  text-decoration: none;
  z-index: 3;
  position: relative;
  width: 100%;
  :hover {
    color: ${props => props.theme.hover};
  }
`;
export default Links