import { all, /* put, takeEvery, call*/ } from 'redux-saga/effects';
import { watchGetTasksSaga } from './getTasks-saga.js';

// Root
export default function* rootSaga() {
    yield all([
        watchGetTasksSaga(),
    ]);
}
