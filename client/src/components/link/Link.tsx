import styled from 'styled-components';

type LinkProps = {
  link: string,
  text: string
}

const Link = ({ link, text }: LinkProps) => (
  <LinkContainer href={link} target="_blank" rel="noopener noreferrer">
    {text}
  </LinkContainer>
)

const LinkContainer = styled.a`
  font-size: 20px;
  display: block;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.link};
`

export default Link;