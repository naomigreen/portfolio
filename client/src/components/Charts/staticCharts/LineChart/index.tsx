import styled from 'styled-components';
import { select } from 'd3';
import { StockValueTypes, StockDataTypes } from '../../../../types';
import { useEffect, useRef } from 'react';
import Text from '../../Text';
import { useChartData } from '../../../../hooks';
import { chartThemes } from '../../../ThemeController/themeData';
import DrawLineChart from './DrawLineChart'

type Props = {
  data: StockDataTypes[]
  chartValues: StockValueTypes
  theme: keyof typeof chartThemes
  yLabel: string
}

const StaticLineChart = ({
  data,
  chartValues,
  theme,
  yLabel,
}: Props) => {

  const customValues = useChartData(chartValues, theme)
  const { width, height, grids } = customValues
  const svgBubbleRef = useRef(null)

  useEffect(() => {
    const SVG = select(svgBubbleRef.current)
    DrawLineChart(
      SVG,
      data,
      customValues
    )
  }, [width, height, theme]);

  return (
    <Container>
      <svg ref={svgBubbleRef} viewBox={`0 0 ${width} ${height}`}>
        {grids.map(({ xClass, yClass }: { xClass: string, yClass: string }, i: any) => (
          <g key={i}>
            <line className={yClass} />
            <line className={xClass} />
          </g>
        ))}
        <g>
          {data.map((d, i) => (
            <path key={i} />
          ))}
        </g>
        <Text transform={`translate(${20}, ${16})`} text={yLabel} />
      </svg>
    </Container>
  )
}

const Container = styled.div`
  line{
    stroke: ${props => props.theme.text};;
  }
  svg{
    margin: 0 auto;
    display: block;
  }
`
export default StaticLineChart
