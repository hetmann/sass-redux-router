import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Highlight from './highlight';

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

// function mapStateToProps() {
//   return {
//     query: getters.searchQuery
//   }
// }

// const ConnectedUIListItem = connect(mapStateToProps)(UIListItem);

const UIList = React.createClass({
  render: function() {
    return (
      <List>
        { this.props.items.map(item =>
          <UIListItem
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
