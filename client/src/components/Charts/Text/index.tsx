import styled from 'styled-components';

type TextProps = {
  xPosition?: number
  yPosition?: number
  transform?: string
  text: string | number
  fontSize?: string
}
const Text = ({ xPosition, yPosition, text, transform, fontSize }: TextProps) => (
  <Element x={xPosition} fontSize={fontSize} transform={transform} y={yPosition}>{text}</Element>
)

const Element = styled.text`
 fill: ${props => props.theme.text};
`
export default Text