import { tasks } from '../../utils/mockData';
import { v4 as uuidv4 } from 'uuid';
import { IAddTaskPayload, ITasksState, IToggleTaskPayload } from '../../types/tasks';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addTask, toggleTask } from './actions';

const initialState: ITasksState = {
  tasks,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action: PayloadAction<IAddTaskPayload>) => {
      state.tasks.push({
        text: action.payload.text,
        tag: action.payload.tag,
        checked: false,
        id: uuidv4(),
      });
    });
    builder.addCase(toggleTask, (state, action: PayloadAction<IToggleTaskPayload>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.checked = !task.checked;
      }
    });
  },
});

export default tasksSlice.reducer;
