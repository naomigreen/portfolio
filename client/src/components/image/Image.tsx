import styled from 'styled-components';

type ImageProps = {
  image: string
  hover?: boolean
  link?: string
  width?: string
  maxWidth?: string
  borderRadius?: string
}

type StyledProps = {
  width: string
  maxWidth: string
  borderRadius: string
}

const Image = ({ link, maxWidth = '100%', width = '50px', image, borderRadius = '0' }: ImageProps) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Img width={width} maxWidth={maxWidth} src={image} borderRadius={borderRadius} alt='' />
      </a>
    )
  }
  return <Img width={width} maxWidth={maxWidth} src={image} alt='' borderRadius={borderRadius} />
}

const Img = styled.img<StyledProps>`
  display: block;
  margin: 20px auto;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  border-radius: ${(props) => props.borderRadius}
`;
export default Image