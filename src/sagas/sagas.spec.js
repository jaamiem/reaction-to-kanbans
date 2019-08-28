import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { incrementAsync, delay } from './sagas';

test('incrementAsync Saga test', assert => {
    const gen = incrementAsync();

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    );

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync must dispatch an increment action'
    )

    assert.deepEqual(
        gen.next(),
        { done: false, value: undefined },
        'incrementAsync should return a promise that will resolve after 1 second'
    );

    assert.end();
})