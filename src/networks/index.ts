import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { RequestParams } from './types';

export const client = axios.create({
  timeout: 60000,
  paramsSerializer: (params: unknown) =>
    qs.stringify(params, { arrayFormat: 'repeat' }),
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
  },
});

export const request = async <T>({
  method,
  url,
  queryParams,
  requestBody,
}: RequestParams): Promise<AxiosResponse<T>> => {
  const query = { ...queryParams };
  switch (method) {
    case 'get':
      return client.get(url, { params: query });
    case 'post':
      return client.post(url, requestBody, { params: query });
    case 'put':
      return client.put(url, requestBody, { params: query });
    case 'delete':
      return client.delete(url, { data: requestBody, params: query });
    default:
      return Promise.reject(new Error('Invalid HttpMethod'));
  }
};

export * from './types';
