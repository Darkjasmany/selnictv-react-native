import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-reponse";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

// TODO: Implementacion de una funcion que obtenga los datos de la API de The Movie DB y los mapee a nuestro modelo de Movie, se usa esta estructura para mantener el código organizado y separado por responsabilidades, en este caso la responsabilidad de obtener los datos de la API y mapearlos a nuestro modelo de Movie.

export const nowPlayingActions = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    // console.log(JSON.stringify(data, null, 2));
    const movies = data.results.map((movie) =>
      MovieMapper.fromtheMovieDBToMovie(movie),
    );
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch now playing movies");
  }
};
