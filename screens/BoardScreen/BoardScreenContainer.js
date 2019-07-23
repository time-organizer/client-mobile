import React, { Component } from 'react';
import BoardScreen from './BoardScreen';
import APIService from '../../services/APIService';

class BoardScreenContainer extends Component {
  state = {
    isFetching: false,
    board: null,
    labels: null,
  };

  componentDidMount() {
    this.fetchBoard();
    this.fetchLabels();
  }

  fetchBoard = () => {
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardId');

    this.setState({ isFetching: true });

    APIService.get(`/api/boards/${boardId}`)
      .then(response => {
        this.setState({
          board: response.data,
          isFetching: false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };

  fetchLabels = () => {
    const { navigation } = this.props;
    const boardId = navigation.getParam('boardId');

    this.setState({ isFetching: true });

    APIService.get(`/api/labels/${boardId}`)
      .then(response => {
        this.setState({
          labels: response.data,
          isFetching: false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { navigation } = this.props;
    const { isFetching, board, labels } = this.state;

    return (
      <BoardScreen
        navigation={navigation}
        isFetching={isFetching}
        board={board}
        labels={labels}
      />
    );
  }
}

BoardScreenContainer.propTypes = {};
BoardScreenContainer.defaultProps = {};

export default BoardScreenContainer;
