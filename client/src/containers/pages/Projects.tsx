import { useContext } from 'react'
import { DataContext } from '../../utils'
import Card from '../../components/Cards/ContentCard'
import { workData } from '../../data'

const Projects = () => {
  const { theme } = useContext(DataContext)
  const isLightTheme = theme === 'light' || theme === 'fairy'

  return (
    <>
      {workData.map(({ text, logo, divider, link, lightLogo }) => (
        <Card
          key={logo}
          text={text}
          image={isLightTheme ? lightLogo : logo}
          divider={divider}
          link={link}
        />
      ))}
    </>
  )
}

export default Projects
