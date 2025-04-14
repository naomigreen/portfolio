import styled from 'styled-components';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CrossIcon } from './crossIcon';
import { BurgerMenuIcon } from './burgerMenuIcon';
import NavLink from '../NavLink';
import { NavLinkData } from '../../data';
import { themeDataType, themeData } from '../ThemeController/themeData';
import ThemeControl from '../ThemeController';
import { MAX_MOBILE, MIN_TABLET, MAX_TABLET, MIN_DESKTOP } from '../../utils';

const MobileMenu = () => {
  const path = useLocation().pathname

  const menu = useRef<HTMLInputElement>(null)
  const [active, setActive] = useState(false)

  const closeMenu = useCallback((e: any) => {
    if (active && !menu.current?.contains(e.target)) {
      setActive(false)
    }
  }, [active]);

  useEffect(() => {
    if (active) {
      setActive(false)
    }
  }, [path])

  useEffect(() => {
    window.addEventListener('touchstart', closeMenu);

    return () => {
      window.removeEventListener('touchend', closeMenu);
    };
  }, [closeMenu])

  return (
    <>
      <Overlay active={active.toString()} />
      <Button onClick={() => setActive(true)}>
        <BurgerMenuIcon />
      </Button>
      <Container active={active.toString()} ref={menu}>
        <CloseButton onClick={() => setActive(false)}>
          <CrossIcon />
        </CloseButton>
        <Content>
          {NavLinkData.map(({ link, text }) => (
            <Item key={link}>
              <NavLink link={link} text={text} />
            </Item>
          ))}
          <Theme>
            <h4>Theme Controls</h4>
            {themeData.map((data: themeDataType) => (
              <ThemeControl key={data.name} icon={data.icon} themeName={data.name} />
            ))}
          </Theme>
        </Content>
      </Container>
    </>
  )
}

type styleProps = {
  active: string
}

const Container = styled.div<styleProps>`
  z-index: 3;
  overflow: auto;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.navText};
  position: fixed;
  height: 100vh;
  transition: 0.7s;
  margin: 0px;
  @media (min-width: ${MIN_DESKTOP}){
    display: none;
  }
  @media (min-width: ${MIN_TABLET}) and (max-width: ${MAX_TABLET}){
    width: ${props => props.active === 'true' ? '40%' : '0'};
    top: 0px;
    left: 0px;
  }

  @media (max-width: ${MAX_MOBILE}){
    width: ${props => props.active === 'true' ? '90%' : '0'};
  }

`
const Item = styled.div`
  margin: 10px 0;
`

const Overlay = styled.div<styleProps>`
  min-height: 1000px;
  min-width: 100%;
  position: absolute;
  z-index: 3;
  background: #0b080978;
  display: ${props => props.active === 'true' ? 'block' : 'none'};
`

const Theme = styled.div`
  margin-top: 20px;
  h4{
    margin-bottom: 10px;
    color: ${props => props.theme.navText};
  }
`

const CloseButton = styled.div`
  svg {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    margin: 12px;
    display: block;
    top: 54px;
    fill: ${props => props.theme.navText};
  }
`

const Content = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  margin: 114px 40px 20px;
  color: ${props => props.theme.secondary};
`

const Button = styled.div`
  position: absolute;
  z-index: 3;
  top: 4px;
  svg {
    height: 30px;
    width: 30px;
    stroke: ${props => props.theme.navText};
    margin: 16px;
    top: 30px;
    position: relative;
  }
  @media (min-width: ${MIN_DESKTOP}){
    display: none;
  }
  @media (min-width: ${MIN_DESKTOP}){
    display: none;
  }
`
export default MobileMenu