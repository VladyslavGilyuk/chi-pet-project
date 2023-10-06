import { FieldValues } from 'react-hook-form';

export interface ITasksState {
  label: string;
  status: string;
  modal: boolean;
  addingTask: boolean;
}
export interface ITasks extends FieldValues {
  task: string;
}
