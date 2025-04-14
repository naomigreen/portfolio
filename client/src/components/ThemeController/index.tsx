import { useContext } from 'react';
import store from 'store';
import styled from 'styled-components';
import { DataContext } from '../../utils';
import { themes } from './themeData';

type ThemeControlProps = {
  icon: string,
  themeName: keyof typeof themes;
}

const ThemeControl = ({ icon, themeName }: ThemeControlProps) => {
  const { theme, setTheme } = useContext(DataContext)

  const handleClick = (value: keyof typeof themes) => {
    store.set('theme', { value });
    setTheme(value)
  }

  return (
    <ThemeIcon src={icon} onClick={() => handleClick(themeName)} alt='' active={themeName === theme ? '0' : '100%'} />
  )
}

type styleProps = {
  active: string
}
const ThemeIcon = styled.img<styleProps>`
  margin: 0 5px;
  border-bottom: 2px solid #0000;
  width: 28px;
  height: 28px;
  filter: grayscale(${props => props.active});
  cursor: pointer;
`
export default ThemeControl