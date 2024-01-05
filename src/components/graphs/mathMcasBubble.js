import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';
import * as ss from 'simple-statistics';
import { XAxis } from 'recharts';

const RBBubble2022 = () => {
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

        d3.csv("https://raw.githubusercontent.com/ckuzmick/RF-Files/main/rf001_01.csv").then(data => {

        const x = d3.scaleLinear()
            .domain([0, 400])
            .range([0, width]);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear()
            .domain([0, 1800])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        const z = d3.scaleLinear()
            .domain([525000, 10000000])
            .range([5, 22]);

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg.append('g')
            .selectAll("dot")
            .data(data)
            .join("circle")
                .attr("class", "bubbles")
                .attr("cx", d => x(+d.Att))
                .attr("cy", d => y(+d.Yds))
                .attr("r", d => z(+d.Salary))
                .style("fill", "blue")
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9)
                    .style("visibility", "visible")
                tooltip.html(`Player: ${d.Player} </br> Attempts: ${d.Att} </br> Yards: ${d.Yds} </br> Salary: ${d3.format("$.2s")(d.Salary)}`)
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

export const RBBubble22 = RBBubble2022;