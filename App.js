import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  createAppContainer,
  createStackNavigator,
  // NavigationActions
} from 'react-navigation';

import { routes } from './constants/Routes';
import { colorsVariables } from './constants/Colors';
// import APIService from './services/APIService';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colorsVariables.textColor,
    accent: colorsVariables.accentColor,
  }
};

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  // componentDidMount() {
  //   APIService.loggedIn()
  //     .then((isLoggedIn) => {
  //       console.log(isLoggedIn);
  //
  //       if (isLoggedIn) {
  //         NavigationActions.navigate({ routeName: 'Boards' })
  //       } else {
  //         NavigationActions.navigate({ routeName: 'Login' })
  //       }
  //     });
  // }

  render() {
    const stackConfig = {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    };

    const AppNavigator = createAppContainer(createStackNavigator(routes, stackConfig));

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <PaperProvider theme={theme}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <AppNavigator />
          </KeyboardAvoidingView>
        </PaperProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
