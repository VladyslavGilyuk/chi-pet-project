import { data } from './helper';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const filteredData = data.map((entry) => ({
    ...entry,
    Today: entry.Today && parseInt(entry.hours) < currentHour ? entry.Today : null,
    Yesterday: entry.Yesterday && parseInt(entry.hours) < currentHour ? entry.Yesterday : null,
  }));

  return (
    <ResponsiveContainer width='100%' height={380}>
      <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 5 }}>
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
        <Line
          type='natural'
          dataKey='Today'
          stroke='#3751FF'
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: 'white', strokeWidth: 4, stroke: '#3751FF' }}
        />
        <Line
          type='natural'
          dataKey='Yesterday'
          stroke='#DFE0EB'
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: 'white', strokeWidth: 4, stroke: '#DFE0EB' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
