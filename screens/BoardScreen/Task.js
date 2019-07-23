import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, ScrollView, Text } from 'react-native';

import Column from './Column';
import { colorsVariables } from '../../constants/Colors';

const Task = ({ task }) => (
  <View style={styles.task}>
    <Text>{task.title}</Text>
  </View>
);

Task.propTypes = {
  board: PropTypes.shape(),
};
Task.defaultProps = {};

const styles = StyleSheet.create({
  task: {
    backgroundColor: colorsVariables.bgColor,
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  }
});

export default Task;
