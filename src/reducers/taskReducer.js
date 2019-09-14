const initialState = {
    fetching: false,
    hasError: false,
    error: '',
    task: null,
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TASK_PUT_REQUEST':
            return { ...state, fetching: true, error: null };
        case 'TASK_PUT_SUCCESS':
            return { ...state, fetching: false, task: action.task };
        case 'TASK_PUT_FAILURE':
            return { ...state, fetching: false, error: action.error, hasError: true };
        case 'TASK_DELETE_REQUEST':
            return { ...state, fetching: true, error: null };
        case 'TASK_DELETE_SUCCESS':
            return { ...state, fetching: false, task: action.task };
        case 'TASK_DELETE_FAILURE':
            return { ...state, fetching: false, error: action.error, hasError: true };

        default:
            return state;
    }
}

export default taskReducer;