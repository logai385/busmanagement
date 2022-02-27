import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Saga/rootSaga';
import TransporterReducer from './Reducers/TransporterReducer';
import LineReducer from './Reducers/LineReducer';
const sagaMiddleware = createSagaMiddleware(rootSaga);
const rootReducer = combineReducers({
    TransporterReducer,LineReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
