import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';

export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fetchUsers = (url) => {
    axios.get(url)
		.then(res => res.data)
		.catch(err => console.error(err));
}

// Root
export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
    ]);
}

// Data
export function* fetchData(action) {
    try {
        // const data
    } catch(e) {
        yield put({ type: 'FETCH_FAILED', e })
    }
}

// Counter
export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

