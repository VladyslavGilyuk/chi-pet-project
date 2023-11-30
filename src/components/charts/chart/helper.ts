import { CurveType } from 'recharts/types/shape/Curve';
import { colors } from '../../../theme';
import { tick, xTickPadding } from './styled';

interface IEntry {
  today: number;
  hours: string;
}
interface IBaseAreaConfig {
  type: CurveType;
  strokeWidth: number;
  dot: boolean;
}
interface IGradient {
  id: string;
  color: string;
  opacity: number;
}

interface AxisConfig {
  dataKey: string;
  tickLine: boolean;
  axisLine: boolean;
  tickMargin: number;
  tickSize: number;
  tick: { fontSize: number; fill: string };
  padding: { right: number };
}

interface YAxisConfig {
  orientation: 'left' | 'right';
  type: 'number' | 'category';
  tickLine: boolean;
  tick: { fontSize: number; fill: string };
  ticks: number[];
  domain: [number, number];
  axisLine: boolean;
  mirror: boolean;
  tickMargin: number;
  dy: number;
}

interface IDataEntry {
  hours: string;
  today: number;
  yesterday: number;
}

export const data: IDataEntry[] = [
  { hours: '0', today: 10, yesterday: 34 },
  { hours: '1', today: 20, yesterday: 36 },
  { hours: '2', today: 27, yesterday: 31 },
  { hours: '3', today: 30, yesterday: 27 },
  { hours: '4', today: 29, yesterday: 24 },
  { hours: '5', today: 27, yesterday: 23 },
  { hours: '6', today: 30, yesterday: 25 },
  { hours: '7', today: 40, yesterday: 30 },
  { hours: '8', today: 51, yesterday: 34 },
  { hours: '9', today: 40, yesterday: 34 },
  { hours: '10', today: 25, yesterday: 31 },
  { hours: '11', today: 18, yesterday: 24 },
  { hours: '12', today: 17, yesterday: 20 },
  { hours: '13', today: 20, yesterday: 18 },
  { hours: '14', today: 33, yesterday: 20 },
  { hours: '15', today: 43, yesterday: 30 },
  { hours: '16', today: 48, yesterday: 42 },
  { hours: '17', today: 47, yesterday: 29 },
  { hours: '18', today: 43, yesterday: 29 },
  { hours: '19', today: 37, yesterday: 33 },
  { hours: '20', today: 28, yesterday: 37 },
  { hours: '21', today: 20, yesterday: 41 },
  { hours: '22', today: 25, yesterday: 47 },
];

export const calculateTodayValue = (entry: IEntry, currentHour: number): number | null => {
  return entry.today && parseInt(entry.hours) <= currentHour ? entry.today : null;
};
export const gradients: IGradient[] = [
  { id: 'colorToday', color: colors.primaryBlue, opacity: 0.2 },
  { id: 'colorYesterday', color: colors.grayLight, opacity: 0.5 },
];

export const yTicks: number[] = [0, 10, 20, 30, 40, 50, 60];
export const yDomain: [number, number] = [0, 60];

export const XAxisConfig: AxisConfig = {
  dataKey: 'hours',
  tickLine: false,
  axisLine: false,
  tickMargin: 12,
  tickSize: 6,
  tick: tick,
  padding: xTickPadding,
};

export const YAxisConfig: YAxisConfig = {
  orientation: 'right',
  type: 'number',
  tickLine: false,
  tick: tick,
  ticks: yTicks,
  domain: yDomain,
  axisLine: false,
  mirror: true,
  tickMargin: -5,
  dy: -10,
};

export const baseAreaConfig: IBaseAreaConfig = {
  type: 'natural',
  strokeWidth: 2,
  dot: false,
};
