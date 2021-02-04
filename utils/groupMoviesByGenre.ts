import { GenreGroups, Movie } from "types";

export const groupMoviesByGenre = (movies: Movie[]): GenreGroups => {
  const groups: GenreGroups = {};

  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (genre in groups) {
        groups[genre].push(movie);
      } else {
        groups[genre] = [movie];
      }
    });
  });

  return groups;
};
