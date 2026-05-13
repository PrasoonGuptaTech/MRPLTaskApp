import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

interface Task {
  id: string;
  addTaskTitle: string;
  addTaskDescription: string;
}
export interface TaskState {
  taskArray: Task[];
}

const initialState: TaskState = {
  taskArray: [],
};

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.taskArray.push(action?.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.taskArray = state.taskArray.filter(
        ele => ele?.id !== action?.payload,
      );
    },
    default: () => {
      return initialState;
    },
  },
});

export const { createTask, deleteTask } = TaskSlice.actions;
export const taskRedux = (state: RootState) => state?.task?.taskArray;
export const taskReducer = TaskSlice.reducer;
