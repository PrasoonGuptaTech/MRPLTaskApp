import { combineReducers } from 'redux';
import { taskReducer } from '../Slicing/taskSlice';

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
