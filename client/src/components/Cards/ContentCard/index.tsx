import Markdown from 'markdown-to-jsx'
import styled from 'styled-components';

type CardProps = {
  text: string
  link: string
  title?: string
  image?: string
  video?: string
  divider?: boolean
}

const Card = ({ text, title, image, video, divider, link }: CardProps) => {
  return (
    <Container >
      {title && <LinkText href={link}>{title}</LinkText>}
      {image && <a href={link}>
        <img alt='company-logo' src={image} />
      </a>}
      {video && <video
        controls
        loop
        playsInline
        preload='auto'
        src={video}
      />}
      <Content>
        <TextContainer>
          {text}
        </TextContainer>
      </Content>
      {divider && <hr />}
    </Container>
  )
}

const Container = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  img {
    width: 200px;
    margin: 0px auto 20px;
    display: block;
  }
  video{
    width: 100%;
  }
  hr{
    border: 0;
    height: 1px;
    background: #333;
    background-image: ${props => props.theme.divider};
  }
`

const Content = styled.div`
  width: 100%;
  margin: 40px auto;
`

const LinkText = styled.a`
  padding: 20px 0;
  display: block;
  font-size: 20px;
  text-decoration: underline;
  color: ${props => props.theme.link}
`
const TextContainer = styled(Markdown)`

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
  a{
    color: ${props => props.theme.link};
  }
  a:visited{
    color: ${props => props.theme.link};
  }
  p{
    margin: 12px 0 0;
  }
 
`
export default Card