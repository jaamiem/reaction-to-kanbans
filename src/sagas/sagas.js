import { all, /* put, takeEvery, call*/ } from 'redux-saga/effects';
import { watchGetTasksSaga } from './getTasks-saga.js';
import { deleteTaskWatcherSaga, 
		newTaskWatcherSaga,
		putTaskWatcherSaga, } from './task-saga.js'

// Root
export default function* rootSaga() {
    yield all([
        watchGetTasksSaga(),
        deleteTaskWatcherSaga(),
		newTaskWatcherSaga(),
		putTaskWatcherSaga(),
    ]);
}
