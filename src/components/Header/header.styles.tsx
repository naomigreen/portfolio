import styled from 'styled-components'
import { MAX_TABLET } from '../../utils'

type styleProps = {
  active: string
}

export const Container = styled.div`
 width: 100%;
 background: ${props => props.theme.primary};
`

export const HeaderImage = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 350px;
  box-shadow: ${props => props.theme.headerShadow};
`

export const HeaderContainer = styled.div<styleProps>`
  position: fixed; 
  width: calc(100% - 80px);
  z-index: 3;
  padding: 20px 40px;
  background: ${props => props.theme.navBackground};
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  box-shadow: ${props => props.theme.navShadow};
  webkit-box-shadow: ${props => props.theme.navShadow};
  -moz-box-shadow: ${props => props.theme.navShadow};
  top: ${props => props.active};
  transition: top 0.4s ease-out;
  @media (max-width: ${MAX_TABLET}){
    grid-template-columns: 6fr;
  }
`
export const ThemesContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  top: 6px;
  position: relative;
  span{
    color: ${props => props.theme.navText};
  }

  @media (max-width: ${MAX_TABLET}){
    display: none;
  }
`

