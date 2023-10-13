import { colors } from '../../../theme';

export const data = [
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

export const gradients = [
  { id: 'colorToday', color: colors.primaryBlue, opacity: 0.2 },
  { id: 'colorYesterday', color: colors.grayLight, opacity: 0.5 },
];

export const yTicks = [0, 10, 20, 30, 40, 50, 60];
export const yDomain = [0, 60];
