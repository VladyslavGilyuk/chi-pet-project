export interface IUnresolvedTicket {
  status: string;
  categories: {
    Urgent: number;
    New: number;
    Default: number;
  };
  Total: number;
}

export const tickets: IUnresolvedTicket[] = [
  {
    status: 'On Hold',
    categories: {
      Urgent: 50,
      New: 78,
      Default: 50,
    },
    Total: 178,
  },
  {
    status: 'Reopened',
    categories: {
      Urgent: 300,
      New: 100,
      Default: 53,
    },
    Total: 453,
  },
  {
    status: 'Testing',
    categories: {
      Urgent: 24,
      New: 400,
      Default: 100,
    },
    Total: 624,
  },
  {
    status: 'Waiting on Feature Request',
    categories: {
      Urgent: 3000,
      New: 1000,
      Default: 238,
    },
    Total: 4238,
  },
  {
    status: 'Awaiting Customer Response',
    categories: {
      Urgent: 500,
      New: 300,
      Default: 205,
    },
    Total: 1005,
  },
  {
    status: 'Awaiting Developer Fix',
    categories: {
      Urgent: 300,
      New: 314,
      Default: 300,
    },
    Total: 914,
  },
  {
    status: 'Pending',
    categories: {
      Urgent: 21,
      New: 160,
      Default: 100,
    },
    Total: 281,
  },
];
