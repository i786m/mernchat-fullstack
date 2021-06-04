import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:2121',
  baseURL: 'http://mernchat-i786m.herokuapp.com/',
});

export default instance;
