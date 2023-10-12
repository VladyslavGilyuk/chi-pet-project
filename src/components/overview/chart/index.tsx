import { data } from './helper';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const [isTodayHovered, setIsTodayHovered] = useState(false);
  const [isYesterdayHovered, setIsYesterdayHovered] = useState(false);

  const filteredData = data.map((entry) => ({
    ...entry,
    Today: entry.Today && parseInt(entry.hours) < currentHour ? entry.Today : null,
    Yesterday: entry.Yesterday && parseInt(entry.hours) < currentHour ? entry.Yesterday : null,
  }));

  return (
    <ResponsiveContainer width='100%' height={380}>
      <AreaChart data={filteredData} margin={{ top: 20, right: 30, left: 5 }}>
        <defs>
          <linearGradient id='colorToday' x1='0' y1='0' x2='1' y2='0'>
            <stop offset='5%' stopColor='#3751FF' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#3751FF' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorYesterday' x1='0' y1='0' x2='1' y2='0'>
            <stop offset='5%' stopColor='#DFE0EB' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#DFE0EB' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke='#EBEDF0' />
        <XAxis
          dataKey='hours'
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tickSize={6}
          tick={{ fontSize: 10, fill: '#9FA2B4' }}
          padding={{ right: 15 }}
        />
        <YAxis
          orientation='right'
          type='number'
          tickLine={false}
          tick={{ fontSize: 10, fill: '#9FA2B4' }}
          ticks={[0, 10, 20, 30, 40, 50, 60]}
          domain={[0, 60]}
          axisLine={false}
          mirror={true}
          tickMargin={-5}
          dy={-10}
        />
        <Tooltip />
        <Area
          type='natural'
          dataKey='Today'
          stroke='#3751FF'
          fill={isTodayHovered ? 'url(#colorToday)' : 'transparent'}
          strokeWidth={2}
          dot={false}
          activeDot={
            isTodayHovered
              ? {
                  r: 6,
                  fill: 'white',
                  strokeWidth: 4,
                  stroke: '#3751FF',
                }
              : undefined
          }
          onMouseEnter={() => setIsTodayHovered(true)}
          onMouseLeave={() => setIsTodayHovered(false)}
        />
        <Area
          type='natural'
          dataKey='Yesterday'
          stroke='#DFE0EB'
          fill={isYesterdayHovered ? 'url(#colorYesterday)' : 'transparent'}
          strokeWidth={2}
          dot={false}
          activeDot={
            isYesterdayHovered
              ? {
                  r: 6,
                  fill: 'white',
                  strokeWidth: 4,
                  stroke: '#DFE0EB',
                }
              : undefined
          }
          onMouseEnter={() => setIsYesterdayHovered(true)}
          onMouseLeave={() => setIsYesterdayHovered(false)}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
