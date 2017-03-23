import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Highlight from '../components/highlight';

class UIListItem extends Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar icon={<CodeIcon />} />}
        rightIcon={<ActionInfo />}
        secondaryText={this.props.secondText}
      >
        <Highlight value={this.props.primaryText} query={this.props.query} />
      </ListItem>
    )
  }
}

const mapStateToProps = state => ({
  query: state.repos.get('query')
});

const ConnectedUIListItem = connect(mapStateToProps)(UIListItem);

const UIList = React.createClass({
  render: function() {
    return (
      <List>
        { this.props.items.map(item =>
          <ConnectedUIListItem
            key={item.id}
            primaryText={item.name}
            secondText={item.description}
            url={item.url} />)
        }
      </List>
    );
  }
});

export default UIList;
