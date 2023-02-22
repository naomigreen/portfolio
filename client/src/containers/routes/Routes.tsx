import { useContext } from 'react';
import { DataContext } from '../../utils/hooks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from '../nav/Nav';
import { NotFound } from '../pages'
import { links } from '../../data/data';

const RouteContainer = () => {
  const { theme } = useContext(DataContext)

  return (
    <Router>
      <Nav />
      <Routes>
        {links.map(({ name, route, Element }) => (
          <Route key={name} path={route} element={<Element theme={theme} />} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
};

export default RouteContainer;
