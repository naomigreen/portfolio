import { techTestData } from '../../data'
import Card from '../../components/Card'

const TechTest = () => (
  <>
    {techTestData.map(({ text, divider, title, link, video }) => (
      <Card key={title} text={text} divider={divider} title={title} link={link} video={video} />
    ))}
  </>
)


export default TechTest