import { useContext } from 'react';
import { DataContext } from '../../utils';
import Card from '../../components/Card';
import { workData } from '../../data';

const Home = () => {
  const { theme } = useContext(DataContext)

  type CardProps = {
    text: string,
    logo: string,
    divider?: boolean
    link: string
    lightLogo?: string
  }
  return (
    <>
      {workData.map(({ text, logo, divider, link, lightLogo }: CardProps) => (
        <Card key={logo} text={text} image={theme === 'light' ? lightLogo : logo} divider={divider} link={link} />
      ))}
    </>
  );
}

export default Home