import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-reponse";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

// TODO 1. infiniteScroll con InfiniteQuery
// 1. Definir la interface para decir como quiero que funcione
interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesActions = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    // 2. Podemos enviarlo en la ruta o enviar el segundo argumento de una petición axios
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        pages: page,
      },
    });
    const movies = data.results.map((movie) =>
      MovieMapper.fromtheMovieDBToMovie(movie),
    );
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch top rated movies");
  }
};
