import React from 'react';
import { render } from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import messagesReducer from './Store/MessagesReducer';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import counterReducer from './Store/CounterReducer';
import usersReducer from './Store/usersReducer'

const routeReducer = combineReducers(
    {
        messages: messagesReducer,
        counter: counterReducer,
        users: usersReducer,
    });

const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(logger, reduxThunk)));
render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App/App.js', () => {
    const UpdatedAppComponent = require('./App/App.js').default; // eslint-disable-line global-require
    render(<UpdatedAppComponent />, document.getElementById('root'));
  });
}
