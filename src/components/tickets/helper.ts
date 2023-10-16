import { v4 as uuidv4 } from 'uuid';
interface ITicketDate {
  id: string;
  ticket: string;
  customer: string;
  createDate: Date;
  deadlineDate: Date;
  priority: string;
  profileIcon: string;
}

export const date: ITicketDate[] = [
  {
    id: uuidv4(),
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: new Date('2019-05-24'),
    deadlineDate: new Date('2019-05-26T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'Adding Images to Featured Posts',
    customer: 'Matt Damon',
    createDate: new Date('2019-05-24'),
    deadlineDate: new Date('2019-05-26T08:00:00'),
    priority: 'Low',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'When will I be charged this month?',
    customer: 'Robert Downey',
    createDate: new Date('2019-05-24'),
    deadlineDate: new Date('2019-05-26T07:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'Payment not going through',
    customer: 'Christian Bale',
    createDate: new Date('2019-05-24'),
    deadlineDate: new Date('2019-05-25T17:00:00'),
    priority: 'Normal',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'Unable to add replies',
    customer: 'Henry Cavil',
    createDate: new Date('2019-05-24'),
    deadlineDate: new Date('2019-05-25T16:00:00'),
    priority: 'High',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'Downtime since last week',
    customer: 'Chris Evans',
    createDate: new Date('2019-05-23'),
    deadlineDate: new Date('2019-05-25T14:00:00'),
    priority: 'Normal',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2019-05-22'),
    deadlineDate: new Date('2019-05-25T11:30:00'),
    priority: 'Low',
    profileIcon: 'Icon',
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2019-05-21'),
    deadlineDate: new Date('2019-05-24T13:00:00'),
    priority: 'Normal',
    profileIcon: 'Icon',
  },
];
