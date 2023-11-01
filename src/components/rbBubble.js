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

        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv").then(data => {

        const x = d3.scaleLinear()
            .domain([0, 12000])
            .range([0, width]);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear()
            .domain([35, 90])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        const z = d3.scaleLinear()
            .domain([200000, 1310000000])
            .range([4, 40]);

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
                .attr("cx", d => x(+d.gdpPercap))
                .attr("cy", d => y(+d.lifeExp))
                .attr("r", d => colorBalls(d.continent))
                .style("fill", "#69b3a2")
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(`Player: ${d.zPlayer} </br> Targets: ${d.Tgt} </br> Receptions: ${d.Rec}`)
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
