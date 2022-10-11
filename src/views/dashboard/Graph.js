import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,PieChart} from 'recharts';
import DashBoard from './Dashboard';
import Dashboard from './Dashboard';
// import Card from 'antd/lib/card/Card';
import Dashboardlayout from '../../component/Dashboard';
const data = [
  {
    name: 'Akagera',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Nyungwe',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Kinigi',
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Park',
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'national',
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Akagera National',
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'lion',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DashBoarde=()=>{

return (
    <Dashboardlayout>
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop  stopColor="green" stopOpacity={1} />
            <stop stopColor="green" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
    </ResponsiveContainer>
    </Dashboardlayout>
  );
    };
  export default  DashBoarde;