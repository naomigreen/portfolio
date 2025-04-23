import styled from 'styled-components';
import { MAX_MOBILE, MAX_TABLET } from '../../../utils';

type props = {
  src: string
  alt: string
  text: number
}

const ImageCard = ({ src, alt, text }: props) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Image src={src} alt={alt} />
    </Container>
  )
}

const Container = styled.div`
position: relative;
`

const Image = styled.img`
  filter: brightness(0.8);
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  height: 300px;
  max-height: 100%;
  @media (max-width: ${MAX_TABLET}){
    height: 244px;
  }
  @media (max-width: ${MAX_MOBILE}){
    height: 150px;
  }
`

const Text = styled.span`
  position: absolute;
  z-index: 2;
  font-size: 40px;
  color: white;
  display: flex;
  justify-self: anchor-center;
`
export default ImageCard