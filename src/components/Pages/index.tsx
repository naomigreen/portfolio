import React from 'react';
import styled from 'styled-components';

type PagesProps = {
  children: React.ReactNode
}

const Pages = ({ children }: PagesProps) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
)

const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.primary};
  min-height: 700px;
  padding-bottom: 40px;
`
const Content = styled.div`
  max-width: 90%;
  margin: 100px auto;
  width: 1000px;
  min-height: 700px;
  border-radius: 8px;
  padding: 40px 0;
  color: ${props => props.theme.text};
  box-shadow: ${props => props.theme.contentShadow};
  background: ${props => props.theme.secondary};
`
export default Pages