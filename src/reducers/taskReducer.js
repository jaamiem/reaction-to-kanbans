const initialState = {
	fetching: false,
	hasError: false,
	error: '',
	rows: [],
	searchTerms: {},
}

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TASKS_GET_REQUEST':
			return { ...state, fetching: true, error: null };
		case 'TASKS_GET_SUCCESS':
			return { ...state, fetching: false, rows: action.tasks };
		case 'TASKS_GET_FAILURE':
			return { ...state, fetching: false, error: action.error, hasError: true };
		case 'TASK_NEW_REQUEST':
			return { ...state, fetching: true, error: null };
		case 'TASK_NEW_SUCCESS':
			return { ...state, fetching: false, rows: { ...state.rows /* tba */} };
		case 'TASK_NEW_FAILURE':
			return { ...state, fetching: false, error: action.error, hasError: true };
		case 'TASK_PUT_REQUEST':
			return { ...state, fetching: true, error: null };
		case 'TASK_PUT_SUCCESS':
			return { ...state, fetching: false, 
				rows: state.rows.map(task => {  // This potentially mutates state?
					if(task.id === action.task.id) return action.task;
					return task; 
				}),
			};
		case 'TASK_PUT_FAILURE':
			return { ...state, fetching: false, error: action.error, hasError: true };
		case 'TASK_DELETE_REQUEST':
			return { ...state, fetching: true, error: null };
		case 'TASK_DELETE_SUCCESS':
			return { ...state, fetching: false, rows: [...state.rows.filter(task => task !== action.task)] };
		case 'TASK_DELETE_FAILURE':
			return { ...state, fetching: false, error: action.error, hasError: true };

		case 'TASK_UPDATE_SEARCH_TERMS':
			return { ...state, searchTerms: action.payload };
		default:
			return state;
	}
}

export const selectSearchTerms = (state) => state.searchTerms;
export const selectTaskById = (state, taskId) => state.rows.filter(task => task.id === taskId);
export const selectTasksByKeyValue = (state, key, value) => state.rows.filter(task => task[key] === value);

export const selectTasksByTerms = (state) => {
	const terms = state.searchTerms;
	if(Object.values(terms).length < 1) return state.rows;
	const keys = Object.keys(terms);

	return state.rows.filter(task => {
		return keys.every(key => {
			if(terms[key].length < 1) return true;
			return task[key] == terms[key];
		});
	})
}

export default taskReducer;