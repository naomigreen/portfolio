import { useContext } from 'react';
import { DataContext } from '../utils';
import styled from 'styled-components';
import { Header } from '../components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { NotFound } from '../pages'
import { links } from '../data';

const RouteContainer = () => {
  const { theme } = useContext(DataContext)

  return (
    <Router>
      <Header />
      <Container>
        <Content>
          <Routes>
            {links.map(({ name, route, Element }) => (
              <Route key={name} path={route} element={<Element />} />
            ))}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </Content>
      </Container>
    </Router>
  )
};

const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.primary};
  min-height: 700px;
  padding: 100px 0;
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
`
export default RouteContainer;
