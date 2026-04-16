import styled from 'styled-components'
import { useContext } from 'react'
import { DataContext } from '../../utils'
import Markdown from 'markdown-to-jsx'
import { MAX_MOBILE } from '../../utils'
import { workData, desksImages, intro } from '../../data'
import ImageCard from '../../components/Cards/ImageCard'

const Home = () => {
  const { theme } = useContext(DataContext)
  const isLightTheme = theme === 'light' || theme === 'fairy'
  return (
    <Container>
      <Markdown>{intro}</Markdown>
      <ImageContainer>
        {desksImages.map(({ image, alt, year }) => (
          <ImageCard key={image} src={image} alt={alt} text={year} />
        ))}
      </ImageContainer>
      <LogoSection>
        {workData.map(({ logo, lightLogo, alt }) => (
          <CompanyLogo
            key={logo}
            src={isLightTheme ? lightLogo : logo}
            alt={alt}
          />
        ))}
      </LogoSection>
    </Container>
  )
}

export default Home

const Container = styled.div`
  padding: 40px;
  @media (max-width: ${MAX_MOBILE}) {
    padding: 10px;
  }
`

const ImageContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-gap: 20px;
  @media (max-width: ${MAX_MOBILE}) {
    grid-gap: 8px;
  }
`

const LogoSection = styled.div`
  margin: 30px 0 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

const CompanyLogo = styled.img`
  padding: 12px;
  background: ${(props) => props.theme.logoBackground};
  border-radius: 8px;
  object-fit: cover;
  height: 33px;
`
