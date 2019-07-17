import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

class BoardListScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Boards list
        </Text>
      </View>
    );
  }
}

BoardListScreen.propTypes = {};
BoardListScreen.defaultProps = {};

export default BoardListScreen;
