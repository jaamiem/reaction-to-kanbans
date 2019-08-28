import { FETCH_TASKS, NEW_TASK } from '../actions/types.js';

const initialState = {
    items: [],
    item: {},
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TASKS:
            return state;
        case NEW_TASK:
            return state;
        default:
            return state;
    }
};

export default taskReducer;