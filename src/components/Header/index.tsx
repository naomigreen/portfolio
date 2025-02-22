import { useEffect, useContext, useState, useCallback } from 'react';
import { themeDataType, themeData } from '../ThemeController/themeData';
import { DataContext } from '../../utils';
import MobileMenu from '../MobileMenu';
import Nav from '../Nav';
import Logo from '../Logo';
import * as Styled from './header.styles'
import ThemeControl from '../ThemeController';

export const Header = () => {
  const { theme } = useContext(DataContext)
  const [y, setY] = useState(0)
  const [displayNav, setDisplayNav] = useState(true)

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
    <Styled.Container>
      <Styled.HeaderContainer active={displayNav ? '0' : '-96px'}>
        <MobileMenu />
        <Nav />
        <Logo />
        <Styled.ThemesContainer>
          <span>Themes</span>
          <div>
            {themeData.map((data: themeDataType) => (
              <ThemeControl key={data.name} icon={data.icon} themeName={data.name} />
            ))}
          </div>
        </Styled.ThemesContainer>
      </Styled.HeaderContainer>
      <Styled.HeaderImage
        src={`/backgrounds/${theme}.jpg`}
        alt="header image" />
    </Styled.Container>
  )
}