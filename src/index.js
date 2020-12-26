import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

import {forbiddenWorlds} from "./redux/middleware";
import {rootReducer} from "./redux/rootReducer";

import App from './App';
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        forbiddenWorlds,
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

