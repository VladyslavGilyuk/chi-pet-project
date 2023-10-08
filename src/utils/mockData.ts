import { v4 as uuidv4 } from 'uuid';

export const tasks = [
  {
    id: uuidv4(),
    text: 'Delete ticket',
    tag: 'Urgent',
    checked: false,
  },
  {
    id: uuidv4(),
    text: 'Redisign ticket',
    tag: 'New',
    checked: false,
  },

  {
    id: uuidv4(),
    text: 'Update ticket report',
    tag: 'Default',
    checked: true,
  },
  {
    id: uuidv4(),
    text: 'Create new ticket example',
    tag: 'New',
    checked: false,
  },
  {
    id: uuidv4(),
    text: 'Finish ticket update',
    tag: 'Urgent',
    checked: false,
  },
];
