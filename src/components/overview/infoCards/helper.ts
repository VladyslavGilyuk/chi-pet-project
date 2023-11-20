/* istanbul ignore file */
export interface ICard {
  heading: string;
  value: number;
}

export const cardsData: ICard[] = [
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
