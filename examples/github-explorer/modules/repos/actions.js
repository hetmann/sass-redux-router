import { API } from '../core/constants';
import { RECEIVE_REPOS, SEARCHING } from './action-types';

const fetchedRepos = (repos) => ({ type: RECEIVE_REPOS, repos });
export const search = (query) => ({ type: SEARCHING, query });

export const fetchRepos = () => (dispatch, getState) => {
  const username = getState().userInformation.getIn(['info', 'login']);
  fetch(API.GITHUB.repos(username))
    .then(res => res.json())
    .then(res => dispatch(fetchedRepos(res)));
};
