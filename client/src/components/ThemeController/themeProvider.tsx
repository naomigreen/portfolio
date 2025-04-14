import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DataContext } from '../../utils';
import { themes, savedTheme, OSTheme } from './themeData';

type ThemeProps = {
  children: React.ReactNode;
}
const ThemeWrapper = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(savedTheme ? savedTheme : OSTheme || 'dark');

  return (
    <ThemeProvider theme={themes[theme]}>
      <DataContext.Provider value={{ theme, setTheme }}>
        <Main>
          {children}
        </Main>
      </DataContext.Provider>
    </ThemeProvider>
  )
}
const Main = styled.div`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  position: relative;
`
export default ThemeWrapper