import React, { Component } from 'react';

const style = {
  display: 'block',
  color: 'red'
};

export default class ErrorText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span style={style}>{this.props.message}</span>
    )
  }
}
