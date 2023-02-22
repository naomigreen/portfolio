import { useState, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components';
import store from 'store';
import NavLink from '../../components/navLinks/NavLinks';
import MobileMenu from '../../components/mobileMenu/MobileMenu';
import { themes, themeData, themeDataType } from '../../utils/theme/theme';
import { DataContext } from '../../utils/hooks';
import Logo from '../../components/logo/Logo';
import ThemeControl from '../../components/themeControl/ThemeControl';

const NavComponent = () => {
  const { theme, setTheme } = useContext(DataContext)
  const [y, setY] = useState(document.scrollingElement?.scrollHeight)
  const [displayNav, setDisplayNav] = useState(true)

  const handleClick = (value: keyof typeof themes) => {
    store.set('theme', { value });
    setTheme(value)
  }

  const handleScroll = useCallback(() => {
    if (y && y > window.scrollY) {
      setDisplayNav(true)

    } else if (y && y < window.scrollY) {
      setDisplayNav(false)
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll])

  return (
    <NavContainer>
      <NavBar className={displayNav ? 'display-nav' : 'hide-nav'}>
        <MobileNav>
          <MobileMenu theme={theme} handleClick={handleClick} />
          <Logo />
        </MobileNav>
        <Nav>
          <Logo />
          <NavLink />
          <Controls>
            {themeData.map((data: themeDataType) => (
              <ThemeControl key={data.name} icon={data.icon} theme={data.name} activeTheme={theme} handleClick={handleClick} />
            ))}
          </Controls>
        </Nav>
      </NavBar>
    </NavContainer>
  )
}

const MobileNav = styled.div`
@media (min-width: 912px) {
  display: none;
}
@media (max-width: 912px) {
  display: grid;
}

grid-template-columns: 80px 5fr;
height: 80px;
`;

const Nav = styled.div`
@media (min-width: 912px) {
  display: grid;
}
@media (max-width: 912px) {
  display: none;
}
top: 25px;
position: relative;
  grid-template-columns: 1fr 2fr 1fr;
`
const NavContainer = styled.div`
.display-nav{
  top: 0
}
.hide-nav{
  top: -130px
}
`;

const NavBar = styled.div`
width: 100%;
height: 80px;
margin: 0 auto;
position: fixed;
z-index: 3;
background: ${props => props.theme.navColor};
box-shadow: 0px 1px 5px 0px ${props => props.theme.shadow};
transition: top 0.4s ease-out;
`
const Controls = styled.div`
.theme-icon{
  width: 25px;
}
.active-theme{
  width: 25px;
  filter: grayscale(0);
  color: ${props => props.theme.active};
}
`

export default NavComponent