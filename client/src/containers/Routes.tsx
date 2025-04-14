import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import { Header } from '../components/Header';
import { routePaths } from '../data';
import { MAX_TABLET } from '../utils';

const RouteContainer = () => (
  <Router>
    <Header />
    <Container>
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

const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.primary};
  min-height: 700px;
  padding: 100px 0;
  @media (max-width: ${MAX_TABLET}){
    padding: 40px 0;
  }
`
const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;
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

export default RouteContainer;
