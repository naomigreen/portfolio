import styled from 'styled-components';
import { ReactComponent as Icon } from './Icon.svg';

const Logo = () => (
  <Container>
    <Icon />
    <LogoText>Codes Green</LogoText>
  </Container>
)

const Container = styled.div`
svg{
  height: 34px;
  width: 34px;
  fill: ${props => props.theme.companyIcon};
  display: block;
  margin: 0 auto;
  position: relative;
  top: 8px;
}
`

const LogoText = styled.h1`
  text-align: center;
  margin: 0;
  position: relative;
  background: ${props => props.theme.companyLogo};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export default Logo