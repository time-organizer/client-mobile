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
    this.setState({ isFetching: true });

    APIService.get('/api/boards')
      .then(response => {
        console.log(response.data)
        this.setState({
          boards: response.data,
          isFetching: false,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  };

  render() {
    const { navigation } = this.props;
    const { isFetching, boards } = this.state;

    return (
      <BoardListScreen
        navigation={navigation}
        isFetching={isFetching}
        boards={boards}
        fetchBoards={this.fetchBoards}
      />
    );
  }
}

BoardListScreenContainer.propTypes = {};
BoardListScreenContainer.defaultProps = {};

export default BoardListScreenContainer;
