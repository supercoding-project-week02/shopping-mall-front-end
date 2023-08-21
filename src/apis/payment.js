import { client } from '@/apis/index.js';

export const getPurchaseHistory = async () => {
  const response = await client.get('/payments/purchased');
  return response.data;
};

export const getSalesHistory = async () => {
  const response = await client.get('/payments/sold');
  return response.data;
};
