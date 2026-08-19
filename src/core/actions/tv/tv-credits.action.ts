import { movieApi } from "@/core/api/movie-api";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const tvCreditsAction = async (tvId: number) => {
  const { data } = await movieApi.get(`/tv/${tvId}/credits`);
  return data.cast.map(CastMapper.fromtheCastMovieDBToMovie);
};
