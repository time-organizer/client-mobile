import LoginScreenContainer from '../screens/LoginScreen/LoginScreenContainer';
import BoardListScreenContainer from '../screens/BoardsListScreen/BoardListScreenContainer';
import BoardScreenContainer from '../screens/BoardScreen/BoardScreenContainer';

const routes = {
  Login: {
    screen: LoginScreenContainer,
  },
  Boards: {
    screen: BoardListScreenContainer
  },
  Board: {
    screen: BoardScreenContainer,
  }
};

export { routes };
