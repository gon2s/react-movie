import { request, Response } from '@src/networks';
import { IMovie, IMovieDetail } from './types';

const URL = {
  NOW_PLAYING: '/3/movie/now_playing',
  DETAIL: '/3/movie',
};

export const fetchNowPlayingMovies = async () => {
  const { data } = await request<Response<IMovie>>({
    method: 'get',
    url: URL.NOW_PLAYING,
  });
  return data;
};

export const fetchMoviesDetail = async (params: { movie_id: number }) => {
  const { data } = await request<IMovieDetail>({
    method: 'get',
    url: `${URL.DETAIL}/${params.movie_id}`,
  });
  return data;
};
