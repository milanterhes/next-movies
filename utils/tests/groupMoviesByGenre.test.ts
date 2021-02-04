import { groupMoviesByGenre } from "../groupMoviesByGenre";
import mockMovies from "./mockMovies.json";
import mockGroups from "./mockGroups.json";

describe("groupMoviesByGenre", () => {
  it("groups movies correctly by genres", () => {
    const result = groupMoviesByGenre(mockMovies);
    expect(result).toEqual(mockGroups);
  });
});
