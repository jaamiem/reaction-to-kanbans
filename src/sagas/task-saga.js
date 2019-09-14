import { takeLatest, put, call } from 'redux-saga/effects';
import { deleteTask } from '../api/taskActions.js';

export function* deleteTaskWatcherSaga() {
    yield takeLatest('TASK_DELETE_REQUEST', deleteTaskWorkerSaga);
}

function* deleteTaskWorkerSaga(action) {
    try {
        const id = action.payload.id;
        const response = yield call(deleteTask, id);
        yield put({ type: 'TASK_DELETE_SUCCESS', item: response });

    } catch(err) {
        console.log('deleteTaskWorkerSaga: error');
        console.log(err);
        yield put({ type: 'TASK_DELETE_FAILURE', err })
    }
}