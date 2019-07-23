import React, { Component } from 'react';
import BoardScreen from './BoardScreen';
import APIService from '../../services/APIService';

class BoardScreenContainer extends Component {
  state = {
    isFetching: false,
    board: null,
  };

  componentDidMount() {
    this.fetchBoard();
  }

  fetchBoard = () => {
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardId');

    this.setState({ isFetching: true });

    APIService.get(`/api/boards/${boardId}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          board: response.data,
          isFetching: false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };

  render() {
    const { isFetching, board } = this.state;

    return (
      <BoardScreen
        isFetching={isFetching}
        board={board}
      />
    );
  }
}

BoardScreenContainer.propTypes = {};
BoardScreenContainer.defaultProps = {};

export default BoardScreenContainer;
