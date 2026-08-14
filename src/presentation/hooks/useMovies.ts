import { nowPlayingActions } from "@/core/actions/movies/now-playing.action";
import { popularMoviesActions } from "@/core/actions/movies/popular.action";
import { topRatedMoviesActions } from "@/core/actions/movies/to-rated.action";
import { upcomingMoviesActions } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"], // Se define una clave única para la consulta, que nos permite identificarlo y manejar su estado de manera independiente. Se usa dos elementos en el array para poder diferenciar entre diferentes tipos de consultas, en este caso, la consulta de películas que están en cartelera.
    queryFn: nowPlayingActions, // TODO: Se define la función que se ejecutará para obtener los datos de la consulta. En este caso, se llama a la función nowPlayingActions que obtiene las películas que están en cartelera, no se hace el ()=>{nowPlayingActions()} porque no es necesario, ya que useQuery se encarga de ejecutar la función y pasarle los parámetros necesarios.
    staleTime: 1000 * 60 * 5, // Se define el tiempo que los datos de la consulta se consideran "frescos" antes de ser considerados "obsoletos". En este caso, se establece en 5 minutos (1000 ms * 60 s * 5 min).
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesActions,
    staleTime: 1000 * 60 * 5,
  });

  // 3. Como necesitamos enviar el params y si necesitamos definir un Infinite Scroll tenemos que usar el objeto de TanStack useInifityQuery
  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1, // numero establecido por default*
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return topRatedMoviesActions({ page: pageParam });
    },
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage, pages) => pages.length + 1, // determinar la siguiente page* esto es un array de array
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingMoviesActions,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
