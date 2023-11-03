import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';

const CityChamps = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const margin = { top: 30, right: 50, bottom: 50, left: 50 },
            width = 700 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "plot")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

        d3.csv("https://raw.githubusercontent.com/ckuzmick/d3-file-hosting/main/cityChamps.csv").then(data => {

        const x = d3.scaleLinear()
            .domain([ 1950, 2023 ])
            .range([ 0, width ])
        svg.append("g").call(d3.axisLeft(y))

        const y = d3.scaleBand()
            .domain([ "Boston", "Philadelphia" ])
            .range([ height, 0 ])
            .paddingInner(1)
            .paddingOuter(.5)
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

        const colorBalls = d3.scaleOrdinal()
            .domain([ "NFL", "NBA", "MLB", "NHL" ])
            .range(d3.schemeSet2)

        var jitterWidth = 50
        svg.selectAll("indPoints")
              .data(data)
              .enter()
              .append("circle")
                .attr("cx", d => x(d.Year))
                .attr("cy", d => y(d.City))
                .attr("r", 4)
                .style("fill", "white")
                .attr("stroke", "black")
        

        });
    }, []);

    return <svg ref={svgRef} className='place-self-center'/>;
};

export default CityChamps;