import React, { Component } from 'react';
import BoardListScreen from './BoardListScreen';
import APIService from '../../services/APIService';

class BoardListScreenContainer extends Component {
  state = {
    isFetching: false,
    boardsList: [],

  };

  componentDidMount() {
    this.fetchBoards();
  }

  fetchBoards = () => {
    APIService.get('/api/boards')
      .then(response => {
        console.log(response.data)
        this.setState({ boards: response.data })
      })
      .catch((error) => {
        console.log(error)
      });
  };

  render() {
    const { isFetching, boards } = this.state;

    return (
      <BoardListScreen
        isFetching={isFetching}
        boards={boards}
      />
    );
  }
}

BoardListScreenContainer.propTypes = {};
BoardListScreenContainer.defaultProps = {};

export default BoardListScreenContainer;
