import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import ThemeControl from '../themeControl/ThemeControl';
import { themes, themeData, themeDataType } from '../../utils/theme/theme';
import { crossIcon } from '../../assets/images';
import { links } from '../../data/data';

type MobileMenuProps = {
  handleClick: (theme: keyof typeof themes) => void;
  theme: keyof typeof themes;
}
const MobileMenu = ({ theme, handleClick }: MobileMenuProps) => {
  const [isOpen,] = useState(false);

  return (
    <MenuContainer menuClassName='menu-container' customCrossIcon={<img src={crossIcon} alt='' />} crossClassName='cross' styles={defaultStyles} isOpen={isOpen}>
      <ul>
        {links.map(({ name, route }) => (
          <Link key={name} to={route}>{name}</Link>
        ))}
      </ul>
      <Content>
        <ThemeText>Themes</ThemeText>
        <Controls>
          {themeData.map(({ name, icon }: themeDataType) => (
            <ThemeControl key={name} icon={icon} theme={name} activeTheme={theme} handleClick={handleClick} />
          ))}
        </Controls>
      </Content>
    </MenuContainer>
  )
}

const defaultStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    left: '26px',
    top: '28px'
  },
  bmBurgerBars: {
    background: '-webkit-linear-gradient(#00cecc,#286d0d)'
  },

  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: '20px',
    top: '15px'
  },
  bmCross: {
    width: '25px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
const MenuContainer = styled(Menu)`
  width: 450px;
  max-width: 95%;
  margin: 0 auto;
  top: 0;
  position: relative;
  .active-link {
    background: #0625258c;
  }
  .menu-container{
    background: ${props => props.theme.secondary};
  }
  .cross{
    background: none;
  }
`;

const Link = styled(NavLink)`
  display: block;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  padding: 10px 0;
  color: ${props => props.theme.text};
  text-decoration: none;
`;

const ThemeText = styled.h2`
  top: 100px;
  font-size: 23px;
  color:  ${props => props.theme.text};
`;

const Controls = styled.div`
.active-theme{
  width: 40px;
  filter: grayscale(0);
  color: ${props => props.theme.active};
}
.theme-icon{
  width: 40px;
}
`
const Content = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default MobileMenu;
