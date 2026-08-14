import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { MovieDBCreditResponse } from "@/infrastructure/interfaces/moviedb-credit.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

// TODO 4. Crear el actions
export const getMovieCastActions = async (id: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCreditResponse>(
      `/${id}/credits`,
    );

    // como se definio en la respuesta de la API por cada cast se crea un array de actores por lo que yo accedo a la respuesta y mapeo a cada actor para tener con el formato indicado
    return data.cast.map(CastMapper.fromtheCastMovieDBToMovie);
    console.log(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to cast movie");
  }
};
