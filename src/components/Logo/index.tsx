import styled from 'styled-components';

const Logo = () => (
  <LogoText>Codes Green</LogoText>
)

const LogoText = styled.h1`
  text-align: center;
  margin: 0;
  background: ${props => props.theme.companyLogo};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
export default Logo