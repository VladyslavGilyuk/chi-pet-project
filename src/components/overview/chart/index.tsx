import CustomizedDot from '../customizedDot';
import { colors } from '../../../theme';
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
import { data, gradients, yDomain, yTicks } from './helper';
import { tick, xTickPadding } from './styled';

const Chart = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const [isTodayHovered, setIsTodayHovered] = useState(false);
  const [isYesterdayHovered, setIsYesterdayHovered] = useState(false);

  const filteredData = data.map((entry) => ({
    ...entry,
    today: entry.today && parseInt(entry.hours) < currentHour ? entry.today : null,
    yesterday: entry.yesterday && parseInt(entry.hours) < currentHour ? entry.yesterday : null,
  }));

  const linearGradients = gradients.map(({ id, color, opacity }) => (
    <linearGradient key={id} id={id} x1='0' y1='0' x2='1' y2='0'>
      <stop offset='5%' stopColor={color} stopOpacity={opacity} />
      <stop offset='95%' stopColor={color} stopOpacity={0} />
    </linearGradient>
  ));

  return (
    <ResponsiveContainer width='100%' height={380}>
      <AreaChart data={filteredData} margin={{ top: 20, right: 30, left: 5 }}>
        <defs>{linearGradients}</defs>
        <CartesianGrid vertical={false} stroke={colors.graphDivider} />
        <XAxis
          dataKey='hours'
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tickSize={6}
          tick={tick}
          padding={xTickPadding}
        />
        <YAxis
          orientation='right'
          type='number'
          tickLine={false}
          tick={tick}
          ticks={yTicks}
          domain={yDomain}
          axisLine={false}
          mirror={true}
          tickMargin={-5}
          dy={-10}
        />
        <Tooltip />
        <Area
          type='natural'
          dataKey='yesterday'
          stroke={colors.grayDivider}
          fill={isYesterdayHovered ? `url(#colorYesterday)` : 'transparent'}
          strokeWidth={2}
          dot={false}
          activeDot={isYesterdayHovered ? <CustomizedDot gray={true} /> : undefined}
          onMouseEnter={() => setIsYesterdayHovered(true)}
          onMouseLeave={() => setIsYesterdayHovered(false)}
        />

        <Area
          type='natural'
          dataKey='today'
          stroke={colors.primaryBlue}
          fill={isTodayHovered ? `url(#colorToday)` : 'transparent'}
          strokeWidth={2}
          dot={false}
          activeDot={isTodayHovered ? <CustomizedDot gray={false} /> : undefined}
          onMouseEnter={() => setIsTodayHovered(true)}
          onMouseLeave={() => setIsTodayHovered(false)}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
