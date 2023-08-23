import { client } from '@/apis/index.js';

export const login = async (payload) => {
  const response = await client.post('/user/login', payload);
  return response.data;
};

export const getUserPayMoney = async () => {
  const response = await client.get('/user/recharge');
  return response.data;
};

export const join = async (payload) => {
  const response = await client.post('/user/signup', payload);
  return response.data;
};
