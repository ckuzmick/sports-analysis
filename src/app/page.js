'use client'
import * as recharts from 'recharts';
import { ScatterChart, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, Legend, Scatter } from 'recharts';
import puppeteer from 'puppeteer';

const getData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto('https://www.pro-football-reference.com/years/2023/receiving.htm', {
    waitUntil: "domcontentloaded",
  });

  const stats = await page.evaluate(() => {
    const playerList = document.querySelector("");

    return finalStats.from(playerList).map((player) => {
      const rec = player.querySelector("").innerText;
      const tgt = player.querySelector("").innerText;

      return { rec, tgt };
    });
  });

  console.log(quotes);

  await browser.close();
};

getData();

const homePage =  () => (
  <ScatterChart
  width={800}
  height={800}
  margin={{
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  }}
  >
  <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="tgt" type="number" name="Targets" unit="" />
    <YAxis dataKey="rec" type="number" name="Catches" unit="" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="A school" data={finalStats} fill="#8884d8" />
  </ScatterChart>
);

export default homePage;