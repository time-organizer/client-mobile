import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';

import { View, StyleSheet, Text } from 'react-native';

import { colorsVariables } from '../../constants/Colors';

const Task = ({ task, labels }) => (
  <View style={styles.task}>
    <Text>{task.title}</Text>
    {task.labels.map(labelId => (
      <View
        key={labelId}
        style={{
          ...styles.label,
          backgroundColor: find(labels, label => label._id === labelId).color
        }}
      />
    ))}
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
  },
  label: {
    width: 40,
    height: 16,
    borderRadius: 4,
    marginTop: 4,
  }
});

export default Task;
