import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { ENTER_KEY } from '../modules/core/constants';
import { authenticate } from '../modules/user-management/actions';
import ErrorText from './error-text';

const style = {
  paper: {
    height: 380,
    width: 314,
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    transform: 'translateY(40%)'
  },
  button: {
    margin: 12,
    display: 'block'
  },
  logo: {
    display: 'block',
    margin: '0 auto'
  }
};

class Login extends Component {
  login() {
    const { dispatch } = this.props;
    dispatch(authenticate(this.usernameInput.getValue(), this.passInput.getValue()));
  }
  handleKeyPress(e) {
    if (e.charCode === ENTER_KEY) {
      this.login();
    }
  }
  render() {
    const { isLoading, authFailedReason } = this.props;
    return (
      <Paper style={style.paper}>
        <img style={style.logo} width="200" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
        <TextField onKeyPress={this.handleKeyPress.bind(this)} ref={(i) => this.usernameInput = i} hintText="Username" />
        <TextField onKeyPress={this.handleKeyPress.bind(this)} ref={(i) => this.passInput = i} type="password" hintText="Password" />
        {
          isLoading ? <CircularProgress /> :
            <RaisedButton onMouseUp={this.login.bind(this)}
                          label="Login"
                          style={style.button}
            />
        }
        {
          authFailedReason ? <ErrorText message={authFailedReason} /> : ''
        }
      </Paper>
    );
  }
}

const mapStateToProps = ({ userInformation }) => {
  return {
    isLoading: userInformation.get('isTalkingToServer'),
    authFailedReason: userInformation.get('reason')
  };
};

export default connect(mapStateToProps)(Login);
