import { client } from '@/apis/index.js';

export const login = async (payload) => {
  const response = await client.post('/user/login', payload);
  return response.data;
};

export const getUserPayMoney = async () => {
  const response = await client.get('/user/recharge');
  return response.data;
};

export const getUserInfo = async () => {
  const response = await client.get('/user/info');
  return response.data;
};

export const chargePayMoney = async (payload) => {
  const response = await client.post('/user/recharge', payload);
  return response.data;
};
