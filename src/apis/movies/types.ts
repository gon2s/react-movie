export interface IMovie {
  id: number;
  release_date: string;

  adult: boolean;
  genre_ids: number[];
  original_title: string;
  overview: string;
  popularity: number;

  backdrop_path: string;
  poster_path: string;

  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
