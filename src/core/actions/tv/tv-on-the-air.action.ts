import { movieApi } from "@/core/api/movie-api";
import { TvMapper } from "@/infrastructure/mappers/tv.mapper";

export const tvOnTheAction = async () => {
  const { data } = await movieApi.get("/tv/on_the_air");
  return data.results.map(TvMapper.fromTheMovieDBToTvShow);
};
