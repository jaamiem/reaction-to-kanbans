import { combineReducers } from 'redux';
import taskReducer from './taskReducer.js';
import counterReducer from './counterReducer.js';

const rootReducer = combineReducers({
    task: taskReducer,
    counter: counterReducer,
});

export default rootReducer;