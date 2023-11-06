import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';

const RegularSeasonPlayoffs2023 = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const margin = { top: 50, right: 50, bottom: 50, left: 50 },
            width = 700 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "plot")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        d3.csv("https://raw.githubusercontent.com/ckuzmick/sports-data/main/data/NBA/2022/bothPerGame.csv").then(data => {

        const filteredData = data.filter(d => +d.PtsR !== 0 && +d.PtsP !== 0);

        const x = d3.scaleLinear()
            .domain([0, 40])
            .range([0, width]);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear()
            .domain([0, 40])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg.append("line")
            .attr("x1", d => x(0))
            .attr("y1", d => y(0))
            .attr("x2", d => x(40))
            .attr("y2", d => y(40))
            .attr("stroke", "gray")
            .attr("stroke-opacity", 0.5)
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "5,5");

        const textBottomPadding = 1;

        svg.append("defs").append("path")
            .attr("id", "textPath")
            .attr("d", `M${x(0)},${y(0 + textBottomPadding)} ${x(40)},${y(40 + textBottomPadding)}}`);
          
        svg.append("text")
            .append("textPath")
            .attr("xlink:href", "#textPath")
            .style("text-anchor", "left") // Align the text to the middle of the path
            .style("font-size", "14px") // Set the font size
            .attr("startOffset", "15%")
            .text("Player performs the same in the regular season or playoffs");

        svg.append('g')
            .selectAll("dot")
            .data(filteredData)
            .join("circle")
            .attr("cx", d => x(+d.PtsR))
            .attr("cy", d => y(+d.PtsP))
            .attr("r", 3)
            .style("fill", "#69b3a2")
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9)
                    .style("visibility", "visible")
                tooltip.html(`Player: ${d.Player} </br> Regular PPG: ${d.PtsR} </br> Playoffs PPG: ${d.PtsP}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px")
            })
            .on("mousemove", function (event) {
                tooltip.style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px")
            })
            .on("mouseleave", function () {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0)
                    .style("visibility", "collapse")
            });
        });
    }, []); // <-- closing parenthesis for useEffect hook

    return <svg ref={svgRef} className='place-self-center'/>;
};

export default RegularSeasonPlayoffs2023;