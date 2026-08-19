import { movieApi } from "@/core/api/movie-api";
import { TvMapper } from "@/infrastructure/mappers/tv.mapper";

export const tvByIdAction = async (tvId: number) => {
  const { data } = await movieApi.get(`/tv/${tvId}`);
  return TvMapper.fromTheMovieDBToCompleteTvShow(data);
};
