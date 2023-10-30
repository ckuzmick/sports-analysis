'use client'
import { LineChart, Line } from 'recharts';

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 450, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 320, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
];

const renderLineChart =  () => (
  <LineChart className='p-20' width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

export default renderLineChart;