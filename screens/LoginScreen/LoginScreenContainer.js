import LoginScreen from './LoginScreen';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APIService from '../../services/APIService';

class LoginScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errored: false,
    }
  }

  handleChange = (text, field) => {
    this.setState({
      [field]: text,
    });
  };

  submit = () => {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const credentials = {
      email,
      password,
    };

    APIService.post('/auth/login', credentials)
      .then((res) => {
        const { token } = res.data;
        APIService.setToken(token)
          .then(() => {
            navigation.navigate('Boards');
          });
      })
      .catch((error) => {
        this.showDialog();
        console.warn(error);
      });
  };

  showDialog = () => this.setState({ errored: true });

  hideDialog = () => this.setState({ errored: false });

  render() {
    const { email, password, errored } = this.state;

    return (
      <LoginScreen
        email={email}
        password={password}
        handleChange={this.handleChange}
        submit={this.submit}
        hideDialog={this.hideDialog}
        errored={errored}
      />
    );
  }
}

LoginScreenContainer.propTypes = {};
LoginScreenContainer.defaultProps = {};

export default LoginScreenContainer;
