import { combineReducers } from 'redux';
import taskReducer from './getTaskReducer.js';

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;