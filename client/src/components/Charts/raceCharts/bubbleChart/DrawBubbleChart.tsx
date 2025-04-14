import { RaceChartTypes } from '../../../../types';
import { scaleLinear, scaleLog, scaleSqrt, extent, axisBottom, axisLeft } from 'd3';

type DataObject = {
  country: string
  year: number
  population: number
  continent: string
  gdp_cap: number
  life_exp: number
}

const DrawBubbleChart = (
  SVG: any,
  data: DataObject[],
  dataByYear: { year: DataObject[] },
  customValues: RaceChartTypes,
) => {
  const { width, height, margin, colourScale, chartValues } = customValues
  const { xValue, yValue, rValue, type } = chartValues
  const maxRadius = 30

  SVG.selectAll('.y-axis').remove();
  SVG.selectAll('.x-axis').remove();

  const xScale = scaleLog()
    .domain(extent(data, (d: any) => new Date(d[xValue])) as any)
    .range([margin.left, width - margin.right - 30])

  const yScale = scaleLinear()
    .domain(extent(data, (d: any) => new Date(d[yValue])) as any)
    .range([height - margin.bottom, margin.top])

  const rScale = scaleSqrt()
    .domain(extent(data, (d: any) => d[rValue]) as any)
    .range([1, maxRadius])

  SVG.selectAll('circle')
    .data(dataByYear)
    .transition()
    .duration(500)
    .attr('cx', (d: any) => xScale(d[xValue]))
    .attr('cy', (d: any) => yScale(d[yValue]))
    .attr('r', (d: any) => rScale(d[rValue]))
    .attr('opacity', 1)
    .style('fill', (d: any) => colourScale(d[type]))

  SVG.append('g')
    .attr('class', 'y-axis')
    .style('font-size', 12)
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(axisLeft(yScale).ticks(5))

  SVG.append('g')
    .attr('class', 'x-axis')
    .style('font-size', 12)
    .attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(axisBottom(xScale).ticks(5))
}

export default DrawBubbleChart
