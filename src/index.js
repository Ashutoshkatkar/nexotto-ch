import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootSaga from "./sagas";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App1 from './App1';
import Routing from './Routeing';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
//const store = createStore(reducer)
//console.log("DATA IS", store.getState());
ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/* <App /> */}
            {/* <App1 /> */}
            <Routing />
        </Router>
    </Provider>

    , document.getElementById("root"));