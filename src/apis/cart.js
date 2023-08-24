import { client } from '@/apis/index.js';

export const getShoppingCart = async () => {
  const response = await client.get('/shoppingcart');
  return response.data;
};

export const deleteShopoingCart = async (payload) => {
  const response = await client.delete('/shoppingcart/selected', {
    data: payload,
  });
  return response.data;
};

export const modifyShoppingCart = async (payload) => {
  const response = await client.post('/shoppingcart', payload);
  return response.data;
};
