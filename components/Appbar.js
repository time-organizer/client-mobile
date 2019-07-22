import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { colorsVariables } from '../constants/Colors';

const AppBar = ({ goBack, title, subtitle }) => (
  <Appbar.Header style={styles.appHeader}>
    {goBack && (
      <Appbar.BackAction
        onPress={goBack}
      />
    )}
    <Appbar.Content
      titleStyle={styles.title}
      title={title}
      subtitle={subtitle}
    />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: colorsVariables.accentColor,
  },
  title: {
    color: 'white',
  },
});

AppBar.propTypes = {
  goBack: PropTypes.func,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
AppBar.defaultProps = {
  subtitle: '',
  goBack: null,
};

export default AppBar;
