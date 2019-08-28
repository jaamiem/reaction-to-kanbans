import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware]

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

sagaMiddleware.run(rootSaga);

export const action = type => store.dispatch({type})

export default store;