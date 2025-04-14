import styled from 'styled-components';

type Props = {
  width?: number
}
const Loading = ({ width = 80 }) => {
  return (
    <LoadingIcon src='/icons/loading.svg' alt={'loading icon'} width={width} />
  )
}

export default Loading

type styleProps = {
  width: number
}

const LoadingIcon = styled.img<styleProps>`
  width: ${props => props.width}px;
  left: 0; 
  right: 0; 
  margin-inline: auto;
  position: absolute;
`