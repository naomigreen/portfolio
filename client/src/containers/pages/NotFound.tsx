import styled from 'styled-components'

const NotFound = () => (
  <Container>
    <img src='backgrounds/genie.gif' alt='genie error' />
    <h2>
      Oh no, page not found! Please return to the <a href='/'>home page</a>
    </h2>
  </Container>
)

const Container = styled.div`
  display: block;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 40px;
  a {
    color: ${(props) => props.theme.link};
  }
  img {
    margin: 0 auto;
  }
`

export default NotFound
