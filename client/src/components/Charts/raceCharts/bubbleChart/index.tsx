import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { GDPTypes, GDPValueTypes } from '../../../../types';
import { chartThemes } from '../../../ThemeController/themeData';
import { useRaceChartData } from '../../../../hooks';
import Text from '../../Text';
import { select, } from 'd3';
import DrawBubbleChart from './DrawBubbleChart';
import Legend from '../../Legend';

type Props = {
  data: GDPTypes[]
  chartValues: GDPValueTypes
  raceChart?: boolean
  theme: keyof typeof chartThemes
  yLabel: string
  xLabel: string
}

const BubbleRaceChart = ({
  data,
  chartValues,
  theme,
  yLabel,
  xLabel

}: Props) => {

  const customValues = useRaceChartData(data, chartValues, theme)
  const { margin, colourScale, width, height, dataByYear, currentYear } = customValues
  const svgBubbleRef = useRef(null)

  useEffect(() => {
    const SVG = select(svgBubbleRef.current)
    DrawBubbleChart(
      SVG,
      data,
      dataByYear[currentYear],
      customValues,
    )
  }, [width, height, currentYear, theme]);

  return (
    <Container>
      <Legend labels={chartValues.dataNames} colors={colourScale} />
      <div>
        <span />
        <svg ref={svgBubbleRef} viewBox={`0 0 ${width} ${height}`}>
          <Line stroke='lightgrey' strokeDasharray='10 2' className='life_avg' />
          <Line stroke='lightgrey' strokeDasharray='10 2' className='gdp_avg' />
          {dataByYear[chartValues.start as any].map((d: any, i: any) => (
            <circle className='energy' fill='#fff' key={i} />
          ))}
          <Text fontSize='48px' xPosition={width - margin.right - 150} yPosition={height - margin.bottom - 50} text={currentYear} />
          <Text yPosition={height - 20} xPosition={margin.left} text={xLabel} />
          <Text transform={`translate(${30}, ${margin.top + 120}) rotate(-90)`} text={yLabel} />
        </svg>
      </div>
    </Container>
  )
}

const Container = styled.div`
.tooltip-content {
  position: absolute;
  z-index: 1;
  padding: 8px;
  border-radius: 4px;
  background: ${props => props.theme.tooltipBackground};
  color: ${props => props.theme.tooltipText};
}
`
const Line = styled.line`
  stroke: ${props => props.theme.text};
`
export default BubbleRaceChart
