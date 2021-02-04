import { Movie, MoviesResponse } from "types";
import authHeader from "./authHeader";

export const searchMovies = async (
  searchTerm: string = ""
): Promise<Movie[] | undefined> => {
  const movieUrl = process.env.API_URL;

  if (!movieUrl) throw new Error("Missing API URL");

  const searchUrl =
    movieUrl + (searchTerm.length > 0 ? `?q=${searchTerm}` : "");

  const res = await fetch(searchUrl, {
    headers: authHeader(),
  });

  const { movies }: MoviesResponse = await res.json();

  if (movies.length === 0) return undefined;

  return movies;
};
