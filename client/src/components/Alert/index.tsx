import styled from 'styled-components';
import { alertMessages } from '../../data';

type AlertProps = {
  success: boolean
  display?: string
}

const Alert = ({ success = false, display }: AlertProps) => {

  return (
    <Container success={success.toString()} display={display}>
      <img alt='alert' src={success ? '/icons/tick.png' : '/icons/warning.png'} />
      <p>{success ? alertMessages.success : alertMessages.error}</p>
    </Container>
  )
}

type styleProps = {
  success?: string
  display?: string
}
const Container = styled.div<styleProps>`
  opacity: ${prop => prop.display === 'true' ? 1 : 0};
  display: grid;
  grid-template-columns: min-content 5fr;
  background: ${props => props.success === 'true' ? props.theme.successBackground : props.theme.errorBackground};
  border-radius: 4px;
  padding: 10px 12px;
  position: absolute;
  left: 0; 
  right: 0; 
  margin-inline: auto;
  width: 474px;
  max-width: calc(100% - 48px);
  transition: opacity 1.2s ease-in-out;
  border-left: 4px solid ${props => props.success === 'true' ? props.theme.success : props.theme.error};
  img {
    width: 24px;
  }
  p {
    margin: 4px 0 0 12px;
  }
`
export default Alert