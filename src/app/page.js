'use client'
import * as recharts from 'recharts';
import { ScatterChart, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, Legend, Scatter } from 'recharts';

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

    return Array.from(playerList).map((player) => {
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
  width={730}
  height={250}
  margin={{
    top: 20,
    right: 20,
    bottom: 10,
    left: 10,
  }}
  >
  <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="x" type="number" name="stature" unit="cm" />
    <YAxis dataKey="y" type="number" name="weight" unit="kg" />
    <ZAxis dataKey="z" type="number" range={[144, 144]} name="score" unit="km" />
    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    <Legend />
    <Scatter name="A school" data={data01} fill="#8884d8" />
    <Scatter name="B school" data={data02} fill="#82ca9d" />
  </ScatterChart>
);

export default homePage;