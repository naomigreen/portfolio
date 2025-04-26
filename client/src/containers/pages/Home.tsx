import styled from 'styled-components';
import Markdown from 'markdown-to-jsx'
import { MAX_MOBILE } from '../../utils';
import { workData, desksImages, intro } from '../../data';
import ImageCard from '../../components/Cards/ImageCard';

const Home = () => {
  return (
    <Container>
      <Markdown>{intro}</Markdown>
      <ImageContainer>
        {desksImages.map(({ image, alt, year }) => (
          <ImageCard src={image} alt={alt} text={year} />
        ))}
      </ImageContainer>
      <LogoSection>
        {workData.map(({ logo, alt }) => (
          <CompanyLogo src={logo} alt={alt} />
        ))}
      </LogoSection>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding: 40px;
  @media (max-width: ${MAX_MOBILE}){
      padding: 10px;
  }
`

const ImageContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-gap: 20px;
  @media (max-width: ${MAX_MOBILE}){
    grid-gap: 8px;
  }
`

const LogoSection = styled.div`
  margin: 30px 0 0;
`

const CompanyLogo = styled.img`
  padding: 11px;
  background: ${props => props.theme.logoBackground};
  border-radius: 8px;
  object-fit: cover;
  height: 31px;
  margin: 0 12px 12px 0;
`