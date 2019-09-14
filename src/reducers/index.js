import { combineReducers } from 'redux';
import taskReducer from './getTasksReducer.js';

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;