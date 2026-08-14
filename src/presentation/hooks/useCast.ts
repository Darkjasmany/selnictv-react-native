// todo 5 definir el hook

import { getMovieCastActions } from "@/core/actions/movie/get-movie-cast.action";
import { useQuery } from "@tanstack/react-query";

export const useCast = (id: number) => {
  const castQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getMovieCastActions(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { castQuery };
};
