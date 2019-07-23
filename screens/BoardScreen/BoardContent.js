import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, ScrollView } from 'react-native';

import Column from './Column';

const BoardContent = ({ board }) => (
  <View style={{ flex: 1 }}>
    <ScrollView
      horizontal
      style={{ flex: 1 }}
    >
      {board.columnsOrder.map(columnId => (
        <Column
          key={columnId}
          column={board.columns[columnId]}
        />))
      }
    </ScrollView>
  </View>
);

BoardContent.propTypes = {
  board: PropTypes.shape(),
};
BoardContent.defaultProps = {};

const styles = StyleSheet.create({});

export default BoardContent;
