export interface IUnresolvedTickets {
  status: string;
  value: number;
  urgent: number;
  new: number;
  default: number;
}

export const tickets: IUnresolvedTickets[] = [
  {
    status: 'On Hold',
    value: 178,
    urgent: 50,
    new: 78,
    default: 50,
  },
  {
    status: 'Reopened',
    value: 453,
    urgent: 300,
    new: 100,
    default: 53,
  },
  {
    status: 'Testing',
    value: 624,
    urgent: 24,
    new: 400,
    default: 100,
  },
  {
    status: 'Waiting on Feature Request',
    value: 4238,
    urgent: 3000,
    new: 1000,
    default: 238,
  },
  {
    status: 'Awaiting Customer Response',
    value: 1005,
    urgent: 500,
    new: 300,
    default: 205,
  },
  {
    status: 'Awaiting Developer Fix',
    value: 914,
    urgent: 300,
    new: 314,
    default: 300,
  },
  {
    status: 'Pending',
    value: 281,
    urgent: 21,
    new: 160,
    default: 100,
  },
  {
    status: 'On Hold',
    value: 178,
    urgent: 50,
    new: 78,
    default: 50,
  },
  {
    status: 'Reopened',
    value: 453,
    urgent: 300,
    new: 100,
    default: 53,
  },
  {
    status: 'Testing',
    value: 624,
    urgent: 24,
    new: 400,
    default: 100,
  },
  {
    status: 'Waiting on Feature Request',
    value: 4238,
    urgent: 3000,
    new: 1000,
    default: 238,
  },
  {
    status: 'Awaiting Customer Response',
    value: 1005,
    urgent: 500,
    new: 300,
    default: 205,
  },
  {
    status: 'Awaiting Developer Fix',
    value: 914,
    urgent: 300,
    new: 314,
    default: 300,
  },
  {
    status: 'Pending',
    value: 281,
    urgent: 21,
    new: 160,
    default: 100,
  },
];
