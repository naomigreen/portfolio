import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { DataContext, useFetch } from './utils/hooks';
import { themes, savedTheme, OSTheme } from './utils/theme/theme';
import Routes from './containers/routes/Routes';

const App = () => {
  //TODO Update demo data?

  // const { data: gdpData } = useFetch('/api/data/gdp', []);
  // const { data: houseData } = useFetch('/api/data/houses', []);
  const [theme, setTheme] = useState(savedTheme ? savedTheme : OSTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <DataContext.Provider value={{ theme, setTheme } as any}>
        <Main>
          <Video
            autoPlay
            loop
            playsInline
            preload="auto"
            muted
            poster="https://website-background.s3.eu-west-2.amazonaws.com/video-image.png">
            <source src="https://website-background.s3.eu-west-2.amazonaws.com/bg-compressed.mp4" type='video/mp4' />
          </Video>
          <Routes />
        </Main>
      </DataContext.Provider>
    </ThemeProvider>
  )
};

const Video = styled.video`
	width: 100%;
	height: 100%;
	position: fixed;
	object-fit: cover;
  float: left;
  top: 0;
  padding: none;
`

const Main = styled.div`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  position: relative;
`

export default App;
