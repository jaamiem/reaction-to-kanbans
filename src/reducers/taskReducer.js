const initialState = {
    userId: null,
    id: null,
    title: null,
    body: null,
    completed: false,
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default taskReducer;