import "materialize-css/dist/css/materialize.min.css";  // no path means importing from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk"; 

import App from "./components/App";
import reducers from "./reducers";  // automatically access ./reducers/index.js

// composeEnhancers is used to support redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));

// test purpose
window.store = store;

// use provider to give component and its children access to store
ReactDOM.render(
    <Provider store={store}>  
        <App/>
    </Provider>, 
    document.querySelector('#root')
    // #root element is defined in ./public/index.html
);