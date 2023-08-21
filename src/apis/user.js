import { client } from '@/apis/index.js';

export const login = async (payload) => {
  const response = await client.post('/user/login', payload);
  return response.data;
};
