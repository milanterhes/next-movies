import { Movie, MoviesResponse } from "types";
import authHeader from "./authHeader";

export const getMovie = async (slug: string): Promise<Movie | null> => {
  const movieUrl = process.env.API_URL;

  if (!movieUrl) throw new Error("Missing API URL");

  const res = await fetch(movieUrl, {
    headers: authHeader(),
  });
  const { movies }: MoviesResponse = await res.json();

  return movies.find((m) => m.slug === slug);
};
