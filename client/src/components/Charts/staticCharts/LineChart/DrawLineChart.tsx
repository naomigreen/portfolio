import { StockDataTypes, StockCustomValue } from '../../../../types';
import { scaleLinear, scaleTime, line, axisBottom, axisLeft } from 'd3';
import { useMinMax } from '../../../../hooks';

const DrawLineChart = (
  SVG: any,
  data: StockDataTypes[],
  customValues: StockCustomValue
) => {
  const { width, height, margin, chartValues, colourScale, condition } = customValues
  const { name, value, date, start, end } = chartValues

  const { max, min } = useMinMax(data, value)
  SVG.selectAll('text.y-label').remove();
  SVG.selectAll('.y-axis').remove();
  SVG.selectAll('.x-axis').remove();
  SVG.selectAll('tick').remove();
  SVG.selectAll('text.existing-label').remove();

  const xScale = scaleTime()
    .domain([start, end])
    .range([margin.left, width - margin.right])

  const yScale = scaleLinear()
    .domain([min, max] as any).nice()
    .range([height - margin.bottom, margin.top])


  SVG.selectAll('path')
    .data(data)
    .join('path')
    .attr('class', 'stock-line')
    .attr('d', line()
      .x((d: any) => xScale(new Date(d[date])))
      .y((d: any) => yScale(parseFloat(d[value])))
    )
    .transition()
    .duration(500)
    .attr('fill', 'none')
    .attr('stroke', (d: any, i: any) => colourScale(d[i][name]))
    .attr('stroke-width', 1.5)

  SVG.selectAll('text.y-label')
    .data(data)
    .join('text')
    .attr('class', 'existing-label')
    .attr('x', width - margin.right + 5)
    .attr('y', (d: any) => yScale(d[d.length - 1][value]) + condition(d, name))
    .attr('dy', '0.35em')
    .style('fill', (d: any) => colourScale(d[0][name]))
    .style('font-size', 12)
    .text((d: any) => d[0][name]);

  SVG.selectAll('line.x-grid')
    .data(xScale.ticks())
    .attr('x1', (d: any) => xScale(d))
    .attr('x2', (d: any) => xScale(d))
    .attr('y1', margin.top)
    .attr('y2', height - margin.bottom)
    .style('stroke-width', 0.2)

  SVG.selectAll('line.y-grid')
    .data(yScale.ticks())
    .join('line')
    .attr('x1', margin.left)
    .attr('x2', width - margin.right)
    .attr('y1', (d: any) => yScale(d))
    .attr('y2', (d: any) => yScale(d))
    .style('stroke-width', 0.2)

  SVG.append('g')
    .attr('class', 'x-axis')
    .style('font-size', 12)
    .call(axisBottom(xScale).ticks(5))
    .attr('transform', `translate(0, ${height - margin.bottom})`)

  SVG.append('g')
    .attr('class', 'y-axis')
    .style('font-size', 12)
    .call(axisLeft(yScale).ticks(5))
    .attr('transform', `translate(${margin.left}, 0)`)

}

export default DrawLineChart