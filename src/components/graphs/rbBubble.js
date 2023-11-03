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

        d3.csv("https://raw.githubusercontent.com/ckuzmick/d3-file-hosting/main/rbPay.csv").then(data => {

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

        const colorBalls = d3.scaleOrdinal()
            .domain(["All Pro", "All Star", "None"])
            .range(d3.schemeSet2)

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
                .style("fill", d => colorBalls(d.End))
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

    //     const allgeierPoint = {
    //         x: 210,
    //         y: 1035,
    //         label: "Tyler Allgeier"
    //     }

    //     const allgeierPointWidth = allgeierPoint.label.length * 6;
        
    //     svg.append("text")
    //         .attr("x", x(allgeierPoint.x - allgeierPointWidth - 40))
    //         .attr("y", y(allgeierPoint.y + 100))
    //         .text(allgeierPoint.label)
    //         .style("font-size", "12px");

    //     svg.append("line")
    //         .attr("x1", x(allgeierPoint.x - 45)) // X-coordinate of the line start (slightly to the right of the circle)
    //         .attr("y1", y(allgeierPoint.y + 125)) // Y-coordinate of the line start
    //         .attr("x2", x(allgeierPoint.x) - 8) // X-coordinate of the line end (adjust the length of the arrow as needed)
    //         .attr("y2", y(allgeierPoint.y)) // Y-coordinate of the line end
    //         .style("stroke", "black") // Color of the arrow line
    //         .style("stroke-width", 1.5); // Width of the arrow line
        });
    }, []); // <-- closing parenthesis for useEffect hook

    return <svg ref={svgRef} className='place-self-center'/>;
};

export const RBBubble22 = RBBubble2022;

const RBBubble2023 = () => {
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

        d3.csv("https://raw.githubusercontent.com/ckuzmick/d3-file-hosting/main/2023rbPay.csv").then(data => {

        const x = d3.scalePow()
            .domain([0, 160])
            .range([0, width])
            .exponent(.75);
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scalePow()
            .domain([0, 700])
            .range([height, 0])
            .exponent(.75);
        svg.append("g")
            .call(d3.axisLeft(y));

        const z = d3.scaleLinear()
            .domain([525000, 10000000])
            .range([5, 22])

        const colorBalls = d3.scaleOrdinal()
            .domain([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35])
            .range(d3.schemeBlues[9])

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
                .style("fill", d => colorBalls(d.Age))
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9)
                    .style("visibility", "visible")
                tooltip.html(`Player: ${d.Player}, ${d.Age} </br> Attempts: ${d.Att} </br> Yards: ${d.Yds} </br> Salary: ${d3.format("$.2s")(d.Salary)}`)
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

    //     const allgeierPoint = {
    //         x: 210,
    //         y: 1035,
    //         label: "Tyler Allgeier"
    //     }

    //     const allgeierPointWidth = allgeierPoint.label.length * 6;
        
    //     svg.append("text")
    //         .attr("x", x(allgeierPoint.x - allgeierPointWidth - 40))
    //         .attr("y", y(allgeierPoint.y + 100))
    //         .text(allgeierPoint.label)
    //         .style("font-size", "12px");

    //     svg.append("line")
    //         .attr("x1", x(allgeierPoint.x - 45)) // X-coordinate of the line start (slightly to the right of the circle)
    //         .attr("y1", y(allgeierPoint.y + 125)) // Y-coordinate of the line start
    //         .attr("x2", x(allgeierPoint.x) - 8) // X-coordinate of the line end (adjust the length of the arrow as needed)
    //         .attr("y2", y(allgeierPoint.y)) // Y-coordinate of the line end
    //         .style("stroke", "black") // Color of the arrow line
    //         .style("stroke-width", 1.5); // Width of the arrow line
        });
    }, []); // <-- closing parenthesis for useEffect hook

    return <svg ref={svgRef} className='place-self-center'/>;
};

export const RBBubble23 = RBBubble2023;