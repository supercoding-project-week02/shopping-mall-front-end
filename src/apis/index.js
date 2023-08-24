export * from './payment.js';
export * from './product.js';

import axios from 'axios';

import { localstorageKey } from '@/constant/index.js';
import { getItem } from '@/utils/localstorage.js';

// TODO: .env 로 빼야하나?
const BASE_URL = 'http://52.79.168.48:8080/api/v1';

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(async (config) => {
  const accessToken = getItem(localstorageKey.auth);
  // TODO: user 를 전역 상태로 관리하면 해당 부분 삭제
  // const user = getItem(localstorageKey.user);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
