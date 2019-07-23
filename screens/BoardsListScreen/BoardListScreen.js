import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';

import Loader from '../../components/Loader';
import AppBar from '../../components/Appbar';
import BoardListItem from './BoardListItem';

const keyExtractor = (item) => item._id;

const BoardListScreen = ({ boards, isFetching, fetchBoards, navigation }) => (
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
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={fetchBoards}
            />
          }
          renderItem={({ item }) => (
            <BoardListItem
              navigation={navigation}
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
