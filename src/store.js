import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

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

const store = (moduleReducers) => createStore(
  rootReducer(moduleReducers),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
