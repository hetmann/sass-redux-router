import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Login from '../components/login';
import RepoList from './repos-list';

const AppTheme = () => getMuiTheme({
  palette: {
    primary1Color: '#f4511e'
  }
});

const App = props => {
  const { isAuthenticated } = props;
  return (
    <MuiThemeProvider muiTheme={AppTheme()}>
      { isAuthenticated ? <RepoList/> : <Login/> }
    </MuiThemeProvider>
  );
};

const mapStateToProps = ({ userInformation }) => ({
  isAuthenticated: userInformation.get('isLoggedIn')
});

export default connect(mapStateToProps)(App);
