export interface ITask {
  id: string;
  text: string;
  tag: string;
  checked: boolean;
}
export interface ITasksState {
  tasks: ITask[];
}
export interface ToggleTaskPayload {
  id: string;
}
