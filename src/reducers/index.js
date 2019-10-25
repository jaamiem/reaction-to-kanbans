import { combineReducers } from 'redux';
// import getTasksReducer from './getTasksReducer.js';
import taskReducer from './taskReducer.js';

const rootReducer = combineReducers({
	// tasks: getTasksReducer,
	task: taskReducer,
});

export default rootReducer;