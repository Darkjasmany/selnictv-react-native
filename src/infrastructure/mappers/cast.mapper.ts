// Todo 3. Definir el Mapper (o mapeador) es una capa de abstracción cuya función principal es convertir los datos de una fuente externa (como una API) al formato interno que consume tu aplicación.
import { Cast } from "../interfaces/cast.interface";
import { MovieDBCast } from "../interfaces/moviedb-credit.response";

export class CastMapper {
  static fromtheCastMovieDBToMovie = (actor: MovieDBCast): Cast => {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png", // esto en caso de no tener imagen
    };
  };
}
