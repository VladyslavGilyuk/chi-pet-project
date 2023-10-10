export interface ITask {
  id: string;
  text: string;
  tag: string;
  checked: boolean;
}
export interface ITaskInput {
  text: string;
  tag: string;
}
export interface ITasksState {
  tasks: ITask[];
}

export interface IAddTaskPayload {
  text: string;
  tag: string;
}

export interface IToggleTaskPayload {
  id: string;
}
