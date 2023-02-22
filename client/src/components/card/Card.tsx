import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import rehypeRaw from 'rehype-raw'
import Image from '../image/Image';
import Video from '../video/Video';

type CardProps = {
  imageSrc?: string
  videoSrc?: string
  width: string
  maxWidth?: string
  link?: string
  text: string
  divider?: boolean
}

const Card = ({ imageSrc, videoSrc, width, maxWidth = "100%", link, text, divider = true }: CardProps) => (
  <CardContainer>
    {imageSrc && <Image link={link} width={width} maxWidth={maxWidth} image={imageSrc} />}
    {videoSrc && <Video src={videoSrc} />}
    <TextContainer rehypePlugins={[rehypeRaw]} >
      {text}
    </TextContainer>
    {divider && <hr />}
  </CardContainer>
)

const CardContainer = styled.div`
  margin: 60px auto
`
const TextContainer = styled(ReactMarkdown)`
  padding: 20px;
  width: calc(95% - 40px);
  margin: 0 auto;
  max-width: 800px;

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
  a{
    color: ${props => props.theme.link};
  }
  a:visited(
    color: ${props => props.theme.link};
  )
  @media (max-width: 425px) {
    padding: 20px 0;
  }
`;

export default Card