import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-reponse";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesActions = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");
    const movies = data.results.map((movie) =>
      MovieMapper.fromtheMovieDBToMovie(movie),
    );
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch popular movies");
  }
};
