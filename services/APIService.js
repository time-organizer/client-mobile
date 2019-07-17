/* eslint-env browser */
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const {
  REACT_APP_DATA_FLOW_URL = 'http://192.168.0.59:3001',
} = process.env;

const getServiceUrl = (url) => {
  if (url.startsWith('/api') || url.startsWith('/auth')) {
    return REACT_APP_DATA_FLOW_URL;
  }

  return '';
};


const APIService = {
  getToken: async () => {
    try {
      return await AsyncStorage.getItem('auth_token');
    } catch (e) {
      console.warn(e);
    }
  },

  setToken: async token => {
    try {
      await AsyncStorage.setItem('auth_token', token)
    } catch (e) {
      // saving error
    }
  },

  get: async url => axios.get(`${getServiceUrl(url)}${url}`, {
    headers: {
      auth_token: await APIService.getToken(),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
    .then(res => res)
    .catch((err) => {
      const { response: { status } } = err;

      if (status === 401) {
        // AuthService.logout();
      }

      throw err;
    }),

  post: async (url, body, config) => {
    return axios.post(`${getServiceUrl(url)}${url}`, body, {
      ...config,
      headers: {
        auth_token: await APIService.getToken(),
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(res => res)
      .catch((err) => {
        // const { response: { status } } = err;
        console.log(err)

        // if (status === 401) {
        // AuthService.logout();
        // }

        throw err;
      })
  },

  put: async (url, body, config) => axios.put(`${getServiceUrl(url)}${url}`, body, {
    ...config,
    headers: {
      auth_token: await APIService.getToken(),
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
  })
    .then(res => res)
    .catch((err) => {
      const { response: { status } } = err;

      if (status === 401) {
        // AuthService.logout();
      }

      throw err;
    }),
};

export default APIService;
