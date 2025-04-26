import { BrowserRouter as Router, Routes, Route } from 'react-router';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { routePaths } from '../data';
import { MAX_TABLET } from '../utils';

const RouteContainer = () => {
  const video = 'https://website-background.s3.eu-west-2.amazonaws.com/bg-compressed.mp4';

  return (
    <Router>
      <Video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </Video>
      <Container>
        <Header />
        <Content>
          <Routes>
            {routePaths.map(({ name, route, Element }) => (
              <Route key={name} path={route} element={<Element />} />
            ))}
          </Routes>
        </Content>
      </Container>
    </Router>
  )
}

const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.primary};
  height: 100%;
  padding: 100px 0;
  z-index: 2;
  position: relative;
  @media (max-width: ${MAX_TABLET}){
    padding: 40px 0;
  }
`

const Content = styled.div`
  max-width: 100%;
  margin: 242px auto 40px;
  width: 1000px;
  min-height: 700px;
  border-radius: 8px;
  padding: 40px 0;
  color: ${props => props.theme.text};
  box-shadow: ${props => props.theme.contentShadow};
  background: ${props => props.theme.secondary};
  a{
   color: ${props => props.theme.link} ;
  }
`

const Video = styled.video`
	width: 100%;
	height: 100%;
	position: fixed;
	object-fit: cover;
`;
export default RouteContainer;
