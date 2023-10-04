export interface ICardsData {
  heading: string;
  value: number;
}

export const cardsData: ICardsData[] = [
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
