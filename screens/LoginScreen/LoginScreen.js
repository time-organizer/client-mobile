import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

import { MyTextInput } from '../../components';
import { colorsVariables } from '../../constants/Colors';

const LoginScreen = ({ email, password, handleChange, submit }) => (
  <View style={styles.homeContainer}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/images/icon-logo.png')}
        style={styles.loginPageLogo}
        resizeMode='contain'
      />
    </View>
    <View style={styles.formsContainer}>
      <MyTextInput
        onChange={(text) => handleChange(text, 'email')}
        value={email}
        label="Email"
        styles={{ marginBottom: 16 }}
      />
      <MyTextInput
        onChange={(text) => handleChange(text, 'password')}
        value={password}
        label="Password"
        styles={{ marginBottom: 16 }}
      />
      <View>
        <Button
          onPress={submit}
          style={styles.button}
          mode="contained"
        >
          Login
        </Button>
      </View>
    </View>
  </View>
);

export default LoginScreen;

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
