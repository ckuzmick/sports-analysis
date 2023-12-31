import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';

const CityChamps = ({startYear = 1900, cities = [
    "New York City",
    "Detroit",
    "Boston",
    "Chicago",
    "Philadelphia",
    "Bay Area",
    "Dallas", 
    "Miami",
    "Denver",
    "Phoenix",
    "Minnesota",
    "D.C.",
    "Los Angeles"
], startHeight, endYear = 2023}) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const margin = { top: 30, right: 50, bottom: 50, left: 50 },
            width = 700 - margin.left - margin.right,
            height = startHeight - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "plot")
            .style("color", "black")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        console.log("hello");

        d3.csv("https://raw.githubusercontent.com/ckuzmick/sports-data/main/data/misc/cityChampionships.csv").then(data => {

            // var cities = [
            //     "New York City",
            //     "Detroit",
            //     "Boston",
            //     "Chicago",
            //     "Philadelphia",
            //     "Bay Area",
            //     "Dallas", 
            //     "Miami",
            //     "Denver",
            //     "Phoenix",
            //     "Minnesota",
            //     "D.C.",
            //     "Los Angeles"
            // ];

            var filteredData = data.filter((row) => cities.includes(row.City) && startYear <= row.Year && endYear >= row.Year);
        
            const x = d3.scaleLinear()
                .domain([startYear, endYear])
                .range([0, width]);

            const xAxis = d3.axisBottom(x)
                .tickFormat(d3.format("d"));

            svg.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(xAxis)
                .attr("class", "x-axis");

            const y = d3.scaleBand()
                .domain(cities)
                .range([height, 0])
                .paddingInner(1)
                .paddingOuter(0.5);

            svg.append("g")
                .call(d3.axisLeft(y))
                .attr("class", "y-axis")

            const colorBalls = d3.scaleOrdinal()
                .domain(["NFL", "NBA", "BAA", "ABA", "MLB", "NHL"])
                .range(d3.schemeSet2);

            const tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

            svg.selectAll("guideLines")
                .data(filteredData)
                .enter()
                .append("line")
                    .attr("x1", d => x(startYear))
                    .attr("y1", d => y(d.City))
                    .attr("x2", d => x(endYear))
                    .attr("y2", d => y(d.City))
                    .attr("stroke", "gray")
                    .attr("stroke-opacity", 0.5)
                    .attr("stroke-width", 1)
                    .attr("stroke-dasharray", "5,5");

            svg.selectAll("circle")
                .data(filteredData)
                .enter()
                .append("circle")
                .attr("class", "circles")
                .attr("cx", d => x(d.Year))
                .attr("cy", d => y(d.City))
                .attr("r", 4)
                .style("fill", d => colorBalls(d.League))
                .on("mouseover", function (event, d) {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9)
                        .style("visibility", "visible")
                    tooltip.html(`League: ${d.League} </br> Year: ${d.Year} </br> City: ${d.City}`)
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
    }, [startYear, endYear, cities, startHeight]);

    return <svg ref={svgRef} className='place-self-center' />;
};

export default CityChamps;

// const SportsLeaguesRevenue = () => {
//     const svgRef = useRef(null);

//     useEffect(() = {

//     },[])
// };