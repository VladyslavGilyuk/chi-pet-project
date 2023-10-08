export interface ICards {
  heading: string;
  value: number;
}

export const cardsData: ICards[] = [
  {
    heading: 'Unresolved',
    value: 60,
  },
  {
    heading: 'Overdue',
    value: 16,
  },
  {
    heading: 'Open',
    value: 43,
  },
  {
    heading: 'On hold',
    value: 64,
  },
];
