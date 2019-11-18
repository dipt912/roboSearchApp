import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './Reducers/index'
import 'tachyons';
const rootReducers = combineReducers(rootReducer)
const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
