import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardTitle from 'material-ui/Card/CardTitle';
import CardText from 'material-ui/Card/CardText';
import Search from './search';
import List from './list';
import { fetchRepos } from '../modules/repos/actions';

class Repos extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchRepos());
  }

  render() {
    const { info, repos, results, query } = this.props;
    return (
      <Card>
        <CardHeader
          title={info.name}
          subtitle={info.username}
          avatar={info.avatar_url}
        />
        <CardTitle title="Github Explorer" />
        <Search/>
        <CardText>
          <List items={query.length ? results : repos} />
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps({ userInformation, repos }) {
  return {
    info: userInformation.get('info'),
    repos: repos.get('all').toJS(),
    results: repos.get('results').toJS(),
    query: repos.get('query')
  }
}

const ConnectedRepos = connect(mapStateToProps)(Repos);

export default ConnectedRepos;
