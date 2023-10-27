import React, { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import '../../App.css'

const ScatterPlot = ({ data }) => {
  const svgRef = useRef();
  const parseDate = d3.timeParse('%Y-%m-%dT%H:%M:%S'); // Date and time format
  const dataWithParseDate = useMemo(() => data.map(d => ({ ...d, date: parseDate(d.date) })), [data, parseDate])

  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 }
    const width: number = 460 - margin.left - margin.right
    const height: number = 400 - margin.top - margin.bottom

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // Find the minimum and maximum values for both X and Y
    // const xExtent = d3.extent(data, d => d.date);
    const yExtent = d3.extent(dataWithParseDate, d => d.pnl);

    // Define your scales
    const xScale = d3.scaleTime()
      .domain([d3.min(dataWithParseDate, d => d.date), d3.max(dataWithParseDate, d => d.date)])
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([Math.min(yExtent[0], 0), Math.max(yExtent[1], 0)])
      .range([height, 0]);


    // Create lines to connect the data points
    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.pnl));

    const area = d3.area()
      .x(d => xScale(d.date))
      .y0(height)
      .y1(d => yScale(d.pnl));

    svg.append('path')
      .datum(dataWithParseDate)
      .attr('fill', 'rgba(31, 222, 107, 0.2)')
      .attr('stroke', 'rgba(31, 222, 107, 0.4)')
      .attr('stroke-width', 4)
      .attr('d', line)
      .attr('d', area);


    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    const mouseover = function (event, d) {
      console.log(event)
      console.log(d)
      // Calculate the position for the tooltip
      const xPosition = xScale(d.date);
      const yPosition = yScale(d.pnl);

      // Create a tooltip element and set its position and text
      d3.select(svgRef.current)
        .append('text')
        .attr('class', 'tooltip')
        .attr('x', xPosition)
        .attr('y', yPosition - 10) // Adjust the vertical position
        .text(`Date`);
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    const mouseleave = function () {
      d3.select('.tooltip').remove();
    }

    svg
      .append("g")
      .selectAll("circle")
      .data(dataWithParseDate)
      .enter()
      .append("circle")
      .attr("class", "myCircle")
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.pnl))
      .attr("r", 6)
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 2)
      .attr('fill', d => d.pnl > 0 ? '#1FDE6B' : 'red') // Set the fill color to green
      .on("mouseover", mouseover)
      .on("mouseleave", mouseleave)


    // Optional: Add axes
    const xAxis = d3.axisBottom(xScale)
      .tickSize(0); // Set tickSize to 0 to hide ticks
    // const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0, ${yScale(0)})`) // Position X-axis at the zero line
      .call(xAxis)
      .selectAll('text') // Hide X-axis tick text
      .remove();
    // svg.append('g')
    //   .call(yAxis);
  }, [dataWithParseDate]);

  return <svg ref={svgRef}></svg>;
};

export default ScatterPlot;
