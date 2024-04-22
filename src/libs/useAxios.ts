import { useUserStore } from '@/stores/user';
import axios from 'axios';
import type { IResponse } from 'types/response';

const env = import.meta.env;

// 初始化 axios
const request = axios.create({
  baseURL: env.VITE_BASE_API,
  withCredentials: false,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.set('Authorization', useUserStore().token ?? '');
    return config;
  },
  error => {
    console.warn('axios error:', error);
    return Promise.reject(error);
  },
);

// 回复拦截器
request.interceptors.response.use(
  response => {
    return response.data || {};
  },
  error => {
    console.warn('axios error:', error);
    return Promise.reject(error.message);
  },
);

/** post 请求 */
export const post = <T = unknown>(url: string, data: unknown) => {
  return request.post(url, data) as Promise<IResponse<T>>;
};

/** get 请求 */
export const get = <T = unknown>(url: string) => {
  return request.get(url) as Promise<IResponse<T>>;
};
