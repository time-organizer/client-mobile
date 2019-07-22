import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, FlatList } from 'react-native';

import Loader from '../../components/Loader';
import AppBar from '../../components/Appbar';
import BoardListItem from './BoardListItem';

const keyExtractor = (item) => item._id;

const BoardListScreen = ({ boards, isFetching }) => (
  <View>
    <AppBar
      title="Boards list"
    />
    {isFetching
      ? <Loader />
      : (
        <FlatList
          data={boards}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => (
            <BoardListItem
              board={item}
            />
          )}
        />
      )
    }
  </View>
);

BoardListScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  boards: PropTypes.arrayOf(PropTypes.shape()),
};
BoardListScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default BoardListScreen;
