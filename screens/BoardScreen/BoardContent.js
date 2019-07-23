import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, ScrollView, Text } from 'react-native';

import Column from './Column';

const BoardContent = ({ board, labels }) => (
  <View style={{ flex: 1 }}>
    <ScrollView
      horizontal
      style={{ flex: 1 }}
    >
      {board.columnsOrder.length > 0
        ? board.columnsOrder.map(columnId => (
          <Column
            key={columnId}
            column={board.columns[columnId]}
            tasks={board.tasks}
            labels={labels}
          />))
        : (
          <Text>
            There are no columns in this board
          </Text>
        )
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
