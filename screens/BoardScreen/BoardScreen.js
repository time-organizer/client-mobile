import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { View, StyleSheet } from 'react-native';

import Loader from '../../components/Loader';
import AppBar from '../../components/Appbar';
import BoardContent from './BoardContent';

const BoardScreen = ({ board, isFetching }) => (
  <View style={{flex: 1}}>
    <AppBar
      title={get(board, 'title', '')}
    />
    {isFetching
      ? <Loader />
      : !!board && <BoardContent board={board} />
    }
  </View>
);

BoardScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  boards: PropTypes.arrayOf(PropTypes.shape()),
};
BoardScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default BoardScreen;
