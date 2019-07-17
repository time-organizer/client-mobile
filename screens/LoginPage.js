import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

import { MyTextInput } from '../components';
import { colorsVariables } from '../constants/Colors';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (text, field) => {
    this.setState({
      [field]: text,
    });
  };

  submit = () => {
    // login
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.homeContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/icon-logo.png')}
            style={styles.loginPageLogo}
            resizeMode='contain'
          />
        </View>
        <View style={styles.formsContainer}>
          <MyTextInput
            onChange={(text) => this.handleChange(text, 'email')}
            value={email}
            label="Email"
            styles={{ marginBottom: 16 }}
          />
          <MyTextInput
            onChange={(text) => this.handleChange(text, 'password')}
            value={password}
            label="Password"
            styles={{ marginBottom: 16 }}
          />
          <View>
            <Button
              onPress={this.submit}
              style={styles.button}
              mode="contained"
            >
              Login
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: { flex: 1 },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formsContainer: {
    flex: 1,
    marginTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginPageLogo: {
    marginTop: '20%',
    flex: 0.3,
    flexDirection: 'row',
  },
  button: {
    width: 150,
    alignSelf: 'flex-end',
    backgroundColor: colorsVariables.accentColor,
  }
});
