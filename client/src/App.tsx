import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DataContext } from './utils';
import { themes, savedTheme, OSTheme } from './components/ThemeController/themeData';
import Routes from './containers/Routes'

const App = () => {
  const [theme, setTheme] = useState(savedTheme ? savedTheme : OSTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <DataContext.Provider value={{ theme, setTheme } as any}>
        <Routes />
      </DataContext.Provider>
    </ThemeProvider>
  )
};



export default App;
