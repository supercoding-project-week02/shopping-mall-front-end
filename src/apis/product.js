import { client } from './index.js';

// TODO: 예제용이므로 수정 또는 삭제 필요
export const getProducts = () => {
  return client.get('/products');
};
