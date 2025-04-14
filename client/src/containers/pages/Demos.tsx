import { useContext } from 'react';
import styled from 'styled-components';
import { MIN_DESKTOP } from '../../utils';
import { DemoContent } from '../../data';
import Loading from '../../components/Loading';
import { useFetch } from '../../hooks';
import { groupByKey, DataContext } from '../../utils';
import { stockValues, gdpValues, gamingValues } from '../../chartData';
import { chartThemes } from '../../components/ThemeController/themeData';
import BubbleRaceChart from '../../components/Charts/raceCharts/bubbleChart';
import StaticBubble from '../../components/Charts/staticCharts/BubbleChart';
import StaticLineChart from '../../components/Charts/staticCharts/LineChart';

const Demos = () => {
  const { data, loading } = useFetch('/api/data/chartData')
  const { theme } = useContext(DataContext)

  if (!data.stockData?.length || loading) {
    return <Loading width={120} />
  }

  const stock = Object.values(groupByKey(data?.stockData, 'Ticker')) as []

  return (
    <Container>
      <h4>{DemoContent.intro}</h4>
      <p>{DemoContent.gamingInfo}</p>
      <StaticBubble
        data={data?.gameData}
        theme={theme as keyof typeof chartThemes}
        yLabel='Hours played'
        xLabel='Games played over the years'
        chartValues={gamingValues}
      />
      <p>{DemoContent.lineInfo}</p>
      <StaticLineChart
        data={stock}
        theme={theme as keyof typeof chartThemes}
        yLabel='Stock Prices (GBP)'
        chartValues={stockValues}
      />
      <p>{DemoContent.raceChart}</p>
      <BubbleRaceChart
        data={data?.gdpData}
        theme={theme as keyof typeof chartThemes}
        yLabel='Life Expectancy'
        xLabel='GDP Per Capita'
        chartValues={gdpValues}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  @media (min-width: ${MIN_DESKTOP}){
    padding: 20px 40px;
  }
  p, h4{
    padding: 0 20px;
  }
  p{
    padding-bottom: 20px;
  }
`

export default Demos