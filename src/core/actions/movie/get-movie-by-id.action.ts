import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieReponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdActions = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieReponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movie");
  }
};
