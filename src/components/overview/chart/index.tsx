import { PureComponent } from 'react';
import { data } from './helper';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width={700} height={380}>
        <LineChart data={data}>
          <Legend />
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='hours'
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickSize={6}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            orientation='right'
            type='number'
            tickLine={false}
            tick={{ fontSize: 10 }}
            ticks={[0, 10, 20, 30, 40, 50, 60]}
            domain={[0, 60]}
            axisLine={false}
            tickMargin={-20}
          />
          <Tooltip cursor={false} coordinate={{ y: -250 }} position={{ y: -50 }} />
          <Line
            type='natural'
            dataKey='td'
            stroke='#3751FF'
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: 'white', strokeWidth: 4, stroke: '#3751FF' }}
          />
          <Line
            type='natural'
            dataKey='tm'
            stroke='#DFE0EB'
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: 'white', strokeWidth: 4, stroke: '#DFE0EB' }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
