import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';
import * as ss from 'simple-statistics';

const RBBubble = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const margin = { top: 30, right: 50, bottom: 50, left: 50 },
            width = 500 - margin.left - margin.right,
            height = 420 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "plot")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        d3.csv("https://raw.githubusercontent.com/ckuzmick/d3-file-hosting/main/rbPay.csv").then(data => {

        const x = d3.scaleLinear()
            .domain([0, 400])
            .range([0, width]);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear()
            .domain([0, 2000])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        const z = d3.scaleLinear()
            .domain([0, 10000000])
            .range([1000, 1000]);

        const colorBalls = d3.scaleOrdinal()
            .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
            .range(d3.schemeSet2)

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .join("circle")
                .attr("class", "buubbles")
                .attr("cx", d => x(+d.Att))
                .attr("cy", d => y(+d.Yds))
                .attr("r", 20)
                .style("fill", d => colorBalls(d.continent))
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(`Player: ${d.Player} </br> Attempts: ${d.Att} </br> Yards: ${d.Yds}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mousemove", function (event) {
                tooltip.style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseleave", function () {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0)
            });
        });
    }, []); // <-- closing parenthesis for useEffect hook

    return <svg ref={svgRef}></svg>;
};

export default RBBubble;
