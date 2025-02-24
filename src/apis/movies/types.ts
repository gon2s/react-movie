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

export interface IMovieDetail {
  id: number;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  // origin_country: ['US'];
  // original_language: 'en';
  // original_title: 'Finding Nemo';
  overview: string;
  popularity: number;
  poster_path: 'string';
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];

  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
