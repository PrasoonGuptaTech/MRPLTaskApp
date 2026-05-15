import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../redux/store';

interface Task {
  id: string;
  addTaskTitle: string;
  addTaskDescription: string;
}
export interface TaskState {
  taskArray: Task[];
  isTaskEditable: boolean;
  editTaskObject: object;
}

const initialState: TaskState = {
  taskArray: [],
  isTaskEditable: false,
  editTaskObject: {},
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
    editableTask: (state, action: PayloadAction<string>) => {
      const findObj = state.taskArray.find(ele => ele?.id === action.payload);
      Object.assign(state.editTaskObject, findObj);
      state.isTaskEditable = !state.isTaskEditable;
    },
    cancelEditTask: state => {
      state.isTaskEditable = !state.isTaskEditable;
      state.editTaskObject = {};
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const findObj = state.taskArray.find(
        ele => ele?.id === action.payload?.id,
      );
      if (findObj) {
        findObj.addTaskTitle = action?.payload?.addTaskTitle;
        findObj.addTaskDescription = action?.payload?.addTaskDescription;
      }
    },
    default: () => {
      return initialState;
    },
  },
});

export const {
  createTask,
  deleteTask,
  editableTask,
  cancelEditTask,
  updateTask,
} = TaskSlice.actions;
export const taskRedux = (state: RootState) => state?.task?.taskArray;
export const taskReducer = TaskSlice.reducer;
