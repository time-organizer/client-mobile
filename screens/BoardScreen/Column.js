import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Text, Dimensions, FlatList } from 'react-native';
import { colorsVariables } from '../../constants/Colors';
import Task from './Task';

const keyExtractor = (item) => item;

const Column = ({ column, tasks, labels }) => (
  <View style={styles.column}>
    <Text style={styles.columnHeader}>
      {column.title}
    </Text>
    <FlatList
      data={column.tasksOrder}
      keyExtractor={keyExtractor}
      renderItem={({item}) => <Task task={tasks[item]} labels={labels} />}
    />
  </View>
);

Column.propTypes = {
  column: PropTypes.shape(),
};
Column.defaultProps = {};

const styles = StyleSheet.create({
  column: {
    width: Dimensions.get("window").width - 32,
    margin: 16,
    padding: 16,
    backgroundColor: colorsVariables.bgColor,
    flex: 1,
    borderRadius: 1,
    elevation: 1,
    opacity: 0.8,
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Column;
