import { movieApi } from "@/core/api/movie-api";
import { TvMapper } from "@/infrastructure/mappers/tv.mapper";

export const tvPopularAction = async ({ page = 1 }: { page?: number } = {}) => {
  const { data } = await movieApi.get("/tv/popular", { params: { page } });
  return data.results.map(TvMapper.fromTheMovieDBToTvShow);
};
