import styled from 'styled-components';
import { NavLink, useLocation } from "react-router-dom";

type NavLinkProps = {
  link: string
  text: string
  external?: boolean
}
const Nav = ({ link, text }: NavLinkProps) => {
  const path = useLocation().pathname
  return (
    <NavLinkElement active={path === link} to={link} >{text}</NavLinkElement>
  )
}

type styleProps = {
  active: boolean
}
const NavLinkElement = styled(NavLink) <styleProps>`
  color:  ${props => props.theme.navText};
  font-weight: 900;
  border-bottom: 1px solid ${props => props.active ? props.theme.navText : '#ffc0cb00'};
  text-decoration: none;
`
export default Nav