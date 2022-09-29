import styled from 'styled-components';

type ContentProps = {
  children: any
}
const Content = ({ children }: ContentProps) => (
  <Background>
    <Main>
      {children}
    </Main>
  </Background>
)

const Main = styled.div`
  background: ${props => props.theme.secondary};
  padding: 100px 3% 0 ;
  margin: 150px auto 0;
  max-width: 90%;
  width: 1000px;
  min-height: 100vh;
  color: ${props => props.theme.text};
`;
const Background = styled.div`
  background: ${props => props.theme.primary};
  height: 100%;
  position: relative;
  width: 100%;
  display: inline-block;
`;
export default Content