import { client } from '@/apis/index.js';

export const getShoppingCart = async () => {
  const response = await client.get('/shoppingcart');
  return response.data;
};

export const deleteShopoingCart = async () => {
  const response = await client.delete('/');
};
