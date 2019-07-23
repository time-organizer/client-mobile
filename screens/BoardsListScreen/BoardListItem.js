import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import find from 'lodash/find';

import boardThemes from '../../constants/boardThemes';


const BoardListItem = ({ board, navigation }) => {
  const boardTheme = find(boardThemes, theme => theme.key === board.theme);

  return (
    <View>
      <Card
        onPress={() => navigation.navigate('Board', { boardId: board._id })}
        style={{ margin: 8 }}
      >
        <Card.Title
          title={board.title}
        />
        <Card.Cover source={boardTheme.bgHd} />
      </Card>
    </View>
  );
};

BoardListItem.propTypes = {};
BoardListItem.defaultProps = {};

export default BoardListItem;
