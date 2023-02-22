import styled from 'styled-components';
import Content from '../../components/content/Content'
import Link from '../../components/link/Link';
import Card from '../../components/card/Card'
import { techTestData } from '../../data/data'

const TechTest = () => (
  <Content>
    <Container>
      <h1>Previous Tech Tests</h1>
      {techTestData.map(({ link, info, title, video }, i) => (
        <>
          <Link text={title} link={link} />
          <Card videoSrc={video} text={info} width='1000px' link={link} divider={i === 1 ? false : true} />
        </>
      ))}
    </Container>
  </Content>
)


const Container = styled.div`
h1{
  text-align: center;
  color: ${props => props.theme.text
  }
`
export default TechTest
