import axios from 'axios';

const api = axios.create({
  baseURL: 'https://carefy-api.herokuapp.com/'
});

export default api;
