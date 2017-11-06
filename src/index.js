import './index.css';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'; //combineReducers, store by default setup and middleware + compose for middleware

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './store/reducers/counter';
import registerServiceWorker from './registerServiceWorker';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';

// import reducers
const rootReducer = combineReducers({
    ctr: counterReducer,   // name: reducer from import
    res: resultReducer
});

// Middleware function
const logger = (store) => {
  return next => {
    return action => {
      console.log('[Middleware] dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

// Redux store, middleware and redux-thunk setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk))); // rootReducer + middleware setup

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
