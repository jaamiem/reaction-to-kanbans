import { takeLatest, call, put } from "redux-saga/effects";
import { getTasks } from "../api/getTasks.js";

export function* watchGetTasksSaga() {
    yield takeLatest('TASKS_GET_REQUEST', getTasksWorkerSaga);
}

function* getTasksWorkerSaga() {
    try {
        const response = yield call(getTasks);
        yield put({ type: 'TASKS_GET_SUCCESS', rows: response });

    } catch(err) {
        console.log('getTaskWorkerSaga Error: ');
        console.log(err);
        yield put({ type: 'TASKS_GET_FAILURE', err })
    }

}