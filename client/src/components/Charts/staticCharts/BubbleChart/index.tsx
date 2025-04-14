import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { chartThemes } from '../../../ThemeController/themeData';
import { useChartData } from '../../../../hooks';
import Text from '../../Text'
import { GamingTypes, GamingValueType } from '../../../../types';
import { select } from 'd3';
import DrawBubbleChart from './DrawBubbleChart';
import Legend from '../../Legend';

type Props = {
  data: GamingTypes[]
  chartValues: GamingValueType
  theme: keyof typeof chartThemes
  yLabel: string
  xLabel: string
}

const StaticBubble = ({
  data,
  chartValues,
  theme,
  yLabel,
  xLabel

}: Props) => {

  const customValues = useChartData(chartValues, theme)
  const { margin, colourScale, width, height } = customValues
  const svgBubbleRef = useRef(null)
  const divRef = useRef(null)

  useEffect(() => {
    const SVG = select(svgBubbleRef.current)
    const DIV = select(divRef.current)
    DrawBubbleChart(
      SVG,
      data,
      customValues,
      DIV
    )
  }, [width, height, theme]);

  return (
    <Container className='bubble-chart'>
      <Legend labels={chartValues.dataNames} colors={colourScale} />
      <div ref={divRef}>
        <span />
        <svg ref={svgBubbleRef} viewBox={`0 0 ${width} ${height}`}>
          {data.map((d, i: any) => (
            <circle className='energy' fill='#fff' key={i} />
          ))}
          <Text yPosition={height - 10} xPosition={margin.left} text={xLabel} />
          <Text transform={`translate(${20}, ${margin.top + 120}) rotate(-90)`} text={yLabel} />
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
export default StaticBubble
