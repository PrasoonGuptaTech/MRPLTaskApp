import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

export interface TaskState {
  taskTitle: string;
  taskDescription: string;
}

const initialState: TaskState = {
  taskTitle: '',
  taskDescription: '',
};

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      state.taskTitle = action.payload;
    },
  },
});

export const { createTask } = TaskSlice.actions;
export const titleRedux = (state: RootState) => state.task.taskTitle;
export const taskReducer = TaskSlice.reducer;
