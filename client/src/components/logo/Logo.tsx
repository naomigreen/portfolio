import styled from 'styled-components';

const Logo = () => (
  <Company>Codes Green</Company>
)

// TODO add font??
const Company = styled.h2`
  font-family: octuple_maxregular, Arial, sans-serif;
  text-align: center;
  position: relative;
  font-size: 1.6rem;
  top: 5px;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.companyLogo};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 912px) {
    top: 25px;
    font-size: 2.0rem;
    right: 10px;
  }
`;

export default Logo