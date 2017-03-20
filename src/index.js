import './style.scss';
import Immutable from 'immutable';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/app';
import rootReducer from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const loggerMiddleware = createLogger({
  stateTransformer: (state) => {
    const newState = {};

    for (const i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  }
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

