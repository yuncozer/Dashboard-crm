import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
  {
    month: 'Jul',
    2022: 4000,
    2021: 2400,
    amt: 2400,
  },
  {
    month: 'Aug',
    2022: 3000,
    2021: 1398,
    amt: 2210,
  },
  {
    month: 'Sep',
    2022: 2000,
    2021: 9800,
    amt: 2290,
  },
  {
    month: 'Oct',
    2022: 2780,
    2021: 3908,
    amt: 2000,
  },
  {
    month: 'Nov',
    2022: 1890,
    2021: 4800,
    amt: 2181,
  },
  {
    month: 'Dec',
    2022: 2390,
    2021: 3800,
    amt: 2500,
  },
  {
    month: 'Jan',
    2022: 3490,
    2021: 4300,
    amt: 2100,
  },
];

const contentStyle = {
    color: 'blue',
    backgroundColor: '#131517',
    borderRadius: '1.5rem'
}
const wrapperStyle = {
    border: 'none'
}

export default class CardChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <div className='flex flex-row col-start-1 col-end-4 items-center justify-center h-80 rounded-xl bg-secondary-100'>
        {/* <span className='flex text-[#82ca9d] text-xl text-center font-bold ml-8 bg-[#82ca9d]/10 rounded-2xl '>Companies Number</span> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 25,
            right: 50,
            left: 50,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray= "3 3" />
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip  contentStyle={contentStyle} wrapperStyle={wrapperStyle}/>
          <Legend verticalAlign="top" align="center"/>
          <Line type="monotone" dataKey="2021" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2022" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}


