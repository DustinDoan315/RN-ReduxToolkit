import axios from 'axios';

const ApiClient = axios.create({
  baseURL: 'API_URL',
  headers: {
    'Content-type': 'application/json',
  },
});

export default ApiClient;
