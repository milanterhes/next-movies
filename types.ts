export interface Movie {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}

export interface MoviesResponse {
  movies: Movie[];
}

export interface GenreGroups {
  [key: string]: Movie[];
}
