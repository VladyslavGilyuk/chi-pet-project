import CustomizedDot from '../customizedDot';
import LinearGradients from '../linearGradients';
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
interface IEntry {
  today: number;
  hours: string;
}
const Chart = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const [isTodayHovered, setIsTodayHovered] = useState(false);
  const [isYesterdayHovered, setIsYesterdayHovered] = useState(false);

  const calculateTodayValue = (entry: IEntry, currentHour: number): number | null => {
    return entry.today && parseInt(entry.hours) <= currentHour ? entry.today : null;
  };

  const currentData = data.map((entry) => ({
    ...entry,
    today: calculateTodayValue(entry, currentHour),
  }));

  return (
    <ResponsiveContainer width='100%' height={380}>
      <AreaChart data={currentData} margin={{ top: 20, right: 30, left: 5 }}>
        <defs>
          <LinearGradients gradients={gradients} />
        </defs>
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
