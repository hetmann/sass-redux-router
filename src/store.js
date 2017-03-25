import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

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

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, loggerMiddleware];
}

import rootReducer from './reducers';

const store = (moduleReducers) => createStore(
  rootReducer(moduleReducers),
  applyMiddleware(...middlewares)
);

export default store;
