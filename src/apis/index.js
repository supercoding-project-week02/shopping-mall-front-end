import axios from 'axios';

// TODO: .env 로 빼야하나?
const BASE_URL = 'http://52.79.168.48:8080/api/v1';

export const client = axios.create({
  baseURL: BASE_URL,
});
