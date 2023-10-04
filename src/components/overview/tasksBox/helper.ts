export interface ITask {
  label: string;
  tag: string;
}

export const tasks: ITask[] = [
  {
    label: 'Delete ticket',
    tag: 'Urgent',
  },
  {
    label: 'Redisign ticket',
    tag: 'New',
  },
  {
    label: 'Finish ticket update',
    tag: 'Urgent',
  },
  {
    label: 'Create new ticket example',
    tag: 'New',
  },
  {
    label: 'Update ticket report',
    tag: 'Default',
  },
];
