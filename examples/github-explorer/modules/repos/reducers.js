import { RECEIVE_REPOS, SEARCHING } from './action-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  all: [],
  query: '',
  results: []
});

const repos = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REPOS: return state.update('all', () => fromJS(action.repos));
    case SEARCHING:
      return state
        .update('query', () => action.query)
        .update('results', () => {
          const nameRegex = new RegExp(action.query, 'g');
          return state.get('all').filter(repo => nameRegex.test(repo.get('name')));
        });
    default: return state;
  }
};

export default { repos };
