import { GamingTypes, GamingCustomValues } from '../../../../types';
import { scaleLinear, scaleTime, scaleSqrt, axisBottom, axisLeft } from 'd3';

const DrawBubbleChart = (
  SVG: any,
  data: GamingTypes[],
  customValues: GamingCustomValues,
  DIV: any,
) => {
  const { width, height, margin, colourScale, chartValues } = customValues
  const { xValue, yValue, rValue, type, start, end } = chartValues

  const values = data.map((d: any) => (parseFloat(d[rValue])))
  const maxValue = Math.max(...values)
  const minValue = Math.min(...values)
  const maxRadius = 25

  const xScale = scaleTime()
    .domain([start, end])
    .range([margin.left, width - margin.right - 30])

  const yScale = scaleLinear()
    .domain([0, 500])
    .range([height - margin.bottom, margin.top])

  const rScale = scaleSqrt()
    .domain([minValue, maxValue])
    .range([5, maxRadius])

  const tooltip = DIV.selectAll('span')
    .style('display', 'none')
    .attr('class', 'tooltip-content')

  const mouseover = (e: any, d: any) => {
    tooltip.style('display', 'block')
    tooltip.html(`
      <span class: 'tip-content'>
        Name: ${d.name}
        <br/>
        Rating: ${d.rating}/10
        <br/>
        Hours Played: ${d.hours_played}
        <br/> 
        Year Played: ${d.year}
      </span>
    `)
      .style('left', `${e.pageX + 15}px`)
      .style('top', `${e.pageY}px`)
      .transition()
      .duration(200)
  }
  const mouseleave = () => {
    tooltip.style('display', 'none')
  }

  SVG.selectAll('circle')
    .data(data)
    .style('fill', (d: any) => colourScale(d[type]))
    .on('mouseover', mouseover)
    .on('mouseleave', mouseleave)
    .transition()
    .duration(500)
    .attr('class', 'bubble')
    .attr('cx', (d: any) => xScale(new Date(d[xValue])))
    .attr('cy', (d: any) => yScale(d[yValue]))
    .attr('r', (d: any) => rScale(d[rValue]))
    .attr('opacity', 1)

  SVG.append('g')
    .attr('class', 'y-axis')
    .style('font-size', 12)
    .call(axisLeft(yScale).ticks(5))
    .attr('transform', `translate(${margin.left}, 0)`)

  SVG.append('g')
    .attr('class', 'x-axis')
    .style('font-size', 12)
    .call(axisBottom(xScale).ticks(5))
    .attr('transform', `translate(0, ${height - margin.bottom})`)
}

export default DrawBubbleChart