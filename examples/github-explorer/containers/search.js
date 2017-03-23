import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { search } from '../modules/repos/actions'

const style = {
  margin: '20px',
  width: '95%'
};

class Search extends Component {
  handleSearch(e) {
    const { dispatch } = this.props;
    const query = e.target.value;
    dispatch(search(query));
  }

  render() {
    return (
      <TextField ref="input" onKeyUp={this.handleSearch.bind(this)} hintText="Search..." style={style} />
    )
  }
}

export default connect()(Search);
