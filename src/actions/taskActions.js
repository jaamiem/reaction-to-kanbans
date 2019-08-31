import { FETCH_TASKS, NEW_TASK } from './types.js';

export function fetchTasks() {
    return {
        type: FETCH_TASKS,
        payload: '',
    }
}

export function newTask(task) {
    return { 
        type: NEW_TASK,
        payload: task,
    }
}