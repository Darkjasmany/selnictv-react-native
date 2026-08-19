import { tvOnTheAction } from "@/core/actions/tv/tv-on-the-air.action";
import { useQuery } from "@tanstack/react-query";

export const useTv = () => {
  const onTheAirQuery = useQuery({
    queryKey: ["tv", "onTheAir"],
    queryFn: () => tvOnTheAction(),

    staleTime: 1000 * 60 * 5,
  });

  const popularQuery = useQuery({
    queryKey: ["tv", "popular"],
    queryFn: () => tvOnTheAction(), // (usará page = 1 por defecto)
    staleTime: 1000 * 60 * 5,
  });

  return { onTheAirQuery, popularQuery };
};
