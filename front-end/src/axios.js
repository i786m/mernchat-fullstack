import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:2121',
  baseURL: 'http://mernchat-786.herokuapp.com/',
});

export default instance;
