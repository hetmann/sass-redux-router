import './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './store';

import GitHubExplorer, { reducers } from '../examples/github-explorer';
const GitHubStore = store({
  userInformation: reducers.user.userInformation,
  repos: reducers.repos.repos
})

export default class Wrapper extends React.PureComponent {
  render() {
    return (
      <Provider store={GitHubStore}>
        <Router>
          {this.props.children}
        </Router>
      </Provider>
    );
  }
}

render(
  <Wrapper>
    <GitHubExplorer />
  </Wrapper>,
  document.getElementById('root')
);
