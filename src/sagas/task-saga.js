import { takeLatest, put, call } from 'redux-saga/effects';
import { deleteTask, newTask, /*putTask*/ } from '../api/taskActions.js';

export function* deleteTaskWatcherSaga() {
	yield takeLatest('TASK_DELETE_REQUEST', deleteTaskWorkerSaga);
}

function* deleteTaskWorkerSaga(action) {
	const task = action.task;
	console.log('task', task)
	try {
		// const id = task.id;
		/*const response =*/ yield call(deleteTask, task);
		yield put({ type: 'TASK_DELETE_SUCCESS', task });

	} catch(error) {
		console.log('deleteTaskWorkerSaga: error');
		console.log(error);
		yield put({ type: 'TASK_DELETE_FAILURE', error })
	}
}

export function* newTaskWatcherSaga() {
	yield takeLatest('TASK_NEW_REQUEST', newTaskWorkerSaga);
}

function* newTaskWorkerSaga() {
	try {
		const response = yield call(newTask);
		yield put({ type: 'TASK_NEW_SUCCESS', task: response })
		
	} catch (error) {
		console.log('newTaskWorkerSaga: error');
		console.log(error);
		yield put({ type: 'TASK_NEW_FAILURE', error })
	}
}

export function* putTaskWatcherSaga() {
	yield takeLatest('TASK_PUT_REQUEST', putTaskWorkerSaga);
}

function* putTaskWorkerSaga(action) {
	try {
		const task = action.task;
		// const response = yield call(toggleComplete, task);
		yield put({ type: 'TASK_PUT_SUCCESS', task });

	} catch (error) {
		console.log(error);
		yield put({ type: 'TASK_PUT_FAILURE', error });
	}
}