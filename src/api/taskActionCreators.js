export function taskNew() {
    
}

export function deleteTaskAction(task) {
    return {
        type: 'TASK_DELETE_REQUEST', 
        task,
    }
}

export function putTaskAction(task) {
    return {
        type: 'TASK_PUT_REQUEST', 
        task,
    }
}

export function updateSearchTerms(terms) {
	return {
		type: 'TASK_UPDATE_SEARCH_TERMS',
		payload: terms,
	}
}

export function getTasks(){
	return { type: 'TASKS_GET_REQUEST' }
}