import { client } from './index.js';

// TODO: 예제용이므로 수정 또는 삭제 필요
export const getProducts = () => {
  return client.get('/products');
};

export const addProduct = async (payload) => {
  const response = await client.post('/product/', payload, {
    headers: {
      Accept: `*/*`,
      'Content-Type': `multipart/form-data`,
    },
  });
  return response.data;
};

export const getProduct = async (id) => {
  const response = await client.get(`/product/${id}`);
  return response.data;
};

export const editProduct = async (id, payload) => {
  const response = await client.patch(`/product/${id}`, payload, {
    headers: {
      'Content-Type': `multipart/form-data`,
    },
  });
  return response.data;
};
