import { request, Response } from '@src/networks';
import { IMovie } from './types';

const URL = {
  NOW_PLAYING: '/3/movie/now_playing?language=ko-KR',
};

export const requestFetchMovies = async () => {
  const { data } = await request<Response<IMovie>>({
    method: 'get',
    url: `${URL.NOW_PLAYING}`,
  });
  return data;
};
