import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => (
  <Container>
    <img src='backgrounds/genie.gif' />
    <h2>Oh no, page not found! Please return to the <Link to='/'>home page</Link></h2>
  </Container>
)


const Container = styled.div`
  display: block;
  color: ${props => props.theme.navText};
  text-align: center;
  margin-top: 40px;
  a{
    color: ${props => props.theme.link};
  }
  img{
    margin: 0 auto;
  }
`

export default NotFound