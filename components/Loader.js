import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { colorsVariables } from '../constants/Colors';

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator
      size="large"
      animating
      color={colorsVariables.accentColor}
    />
  </View>
);

Loader.propTypes = {};
Loader.defaultProps = {};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
