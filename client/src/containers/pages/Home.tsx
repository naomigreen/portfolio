import Content from '../../components/content/Content'
import Card from '../../components/card/Card'
import { workData } from '../../data/data';
import { desk } from '../../assets/images';
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
      <Image image={desk} width='800px' maxWidth='100%' borderRadius='10px' />
      {workData.map((d, i) => (
        <Card key={d.link} logo={getLogo(d.logo, d.lightLogo)} width={d.width} maxWidth={d.maxWidth} link={d.link} text={d.text} divider={d.divider} />
      ))}
    </Content>
  )
}

export default Home