import { MovieDBTvShow } from "../interfaces/moviedb-tv.response";
import { CompleteTvShow, tvShow } from "../interfaces/tv.interface";

export class TvMapper {
  static fromTheMovieDBToTvShow = (tv: MovieDBTvShow): tvShow => {
    return {
      id: tv.id,
      name: tv.name,
      description: tv.overview,
      firstAirDate: tv.first_air_date
        ? new Date(tv.first_air_date)
        : new Date(),
      rating: tv.vote_average,
      poster: tv.poster_path
        ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
        : "",
      backdrop: tv.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
        : "",
    };
  };

  static fromTheMovieDBToCompleteTvShow = (
    tv: MovieDBTvShow,
  ): CompleteTvShow => {
    return {
      ...TvMapper.fromTheMovieDBToTvShow(tv),
      genres: tv.genres?.map((g) => g.name) ?? [],
      numberOfSeasons: tv.number_of_seasons ?? 0,
      originalName: tv.original_name ?? tv.name,
      createdBy: tv.created_by?.map((c) => c.name) ?? [],
      inProduction: tv.in_production ?? false,
    };
  };
}
