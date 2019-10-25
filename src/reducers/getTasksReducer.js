const initialState = {
    fetching: false,
    hasError: false,
    error: '',
    rows: []
}

const getTaskReducer = (state = initialState, action) => {
	// console.log(action)
    switch(action.type){
        case 'TASKS_GET_REQUEST':
            return { ...state, fetching: true, error: null };
        case 'TASKS_GET_SUCCESS':
            return { ...state, fetching: false, rows: action.rows };
        case 'TASKS_GET_FAILURE':
            return { ...state, fetching: false, rows: null, error: action.error, hasError: true }
        default:
            return state;
    }
};

export default getTaskReducer;