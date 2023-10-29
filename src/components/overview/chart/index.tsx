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
import {
  XAxisConfig,
  YAxisConfig,
  baseAreaConfig,
  calculateTodayValue,
  data,
  gradients,
} from './helper';

const Chart = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const [isTodayHovered, setIsTodayHovered] = useState(false);
  const [isYesterdayHovered, setIsYesterdayHovered] = useState(false);
  
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
        <XAxis {...XAxisConfig} />
        <YAxis {...YAxisConfig} />
        <Tooltip />
        <Area
          {...baseAreaConfig}
          dataKey='yesterday'
          stroke={colors.grayDivider}
          fill={isYesterdayHovered ? `url(#colorYesterday)` : 'transparent'}
          activeDot={isYesterdayHovered ? <CustomizedDot gray={true} /> : undefined}
          onMouseEnter={() => setIsYesterdayHovered(true)}
          onMouseLeave={() => setIsYesterdayHovered(false)}
        />
        <Area
          {...baseAreaConfig}
          dataKey='today'
          stroke={colors.primaryBlue}
          fill={isTodayHovered ? `url(#colorToday)` : 'transparent'}
          activeDot={isTodayHovered ? <CustomizedDot gray={false} /> : undefined}
          onMouseEnter={() => setIsTodayHovered(true)}
          onMouseLeave={() => setIsTodayHovered(false)}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
