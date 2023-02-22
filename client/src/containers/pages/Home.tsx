import Content from '../../components/content/Content'
import Card from '../../components/card/Card'
import { workData, intro } from '../../data/data';
import { desk, me } from '../../assets/images';
import { themes } from '../../utils/theme/theme';
import Image from '../../components/image/Image';

type HomeProps = {
  theme: keyof typeof themes;
}

const Home = (theme: HomeProps) => {

  const getLogo = (darkLogo: string, lightLogo: string | undefined) => {
    if (theme.theme === 'light') {
      return lightLogo ? lightLogo : darkLogo
    }
    return darkLogo
  }

  return (
    <Content>
      <Image image={me} width='150px' maxWidth='100%' borderRadius='100%' />
      <Card text={intro} width='800px' maxWidth='100%' />
      <Image image={desk} width='800px' maxWidth='100%' borderRadius='10px' />
      {workData.map(({ link, logo, lightLogo, width, maxWidth, text, divider }) => (
        <Card key={link} imageSrc={getLogo(logo, lightLogo)} width={width} maxWidth={maxWidth} link={link} text={text} divider={divider} />
      ))}
    </Content>
  )
}

export default Home