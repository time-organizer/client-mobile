import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { routes } from './constants/Routes';

class Auth extends Component {
  render() {
    const { isLoggedIn } = this.props;
    const stackConfig = {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
      initialRouteName: isLoggedIn ? 'Boards' : 'Login',
    };
    const AppNavigator = createAppContainer(createStackNavigator(routes, stackConfig));

    return (
      <AppNavigator />
    );
  }
}

Auth.propTypes = {};
Auth.defaultProps = {};

export default Auth;
