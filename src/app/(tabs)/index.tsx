import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import ErrorState from "@/presentation/components/ui/ErrorState";
import HomeSkeleton from "@/presentation/components/ui/HomeSkeleton";
import PosterHorizontalList from "@/presentation/components/ui/PosterHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets(); // Obtenemos los valores de safe area para ajustar el contenido de la pantalla
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  // Aqui se puede manejar el estado de carga, error y exito de la consulta de películas
  // Por ejemplo, si la consulta está cargando, se puede mostrar un indicador de carga

  if (nowPlayingQuery.isLoading) return <HomeSkeleton />;

  if (nowPlayingQuery.isError) {
    return <ErrorState onRetry={() => nowPlayingQuery.refetch()} />;
  }

  return (
    // TODO Usamos ScrollView para que el contenido de la pantalla sea desplazable, ya que puede haber muchas películas y no caben en la pantalla
    // TODO Ajustamos el padding superior de la vista para que no se superponga con la barra de estado del dispositivo segun los valores de safe area obtenidos por useSafeAreaInsets, safeArea.top nos da el valor del padding superior necesario para que el contenido no se superponga con la barra de estado del dispositivo

    <ScrollView
      className="bg-[#09090B]"
      refreshControl={
        <RefreshControl
          refreshing={nowPlayingQuery.isFetching}
          onRefresh={() => {
            nowPlayingQuery.refetch();
            popularQuery.refetch();
            topRatedQuery.refetch();
            upcomingQuery.refetch();
          }}
          tintColor="#8B5CF6"
        />
      }
    >
      <View style={{ paddingTop: safeArea.top }} className="mt-2 pb-10">
        <Text className="text-3xl font-bold px-4 mb-2 text-white">
          SelNicTV
        </Text>

        {/* Carrousel de películas */}
        <MainSlideshow movies={nowPlayingQuery.data || []} />

        {/* Popular Movies List */}
        <PosterHorizontalList
          title="En Cartelera"
          items={nowPlayingQuery.data ?? []}
          href="/movies/now_playing"
          className="mb-5"
        />

        {/* Top Rated Movies List */}
        {/* 4. Para el infiniteQuery tenemos que pasar el loadNextPage */}
        <PosterHorizontalList
          title="Populares"
          items={popularQuery.data ?? []}
          href="/movies/popular"
          className="mb-5"
        />

        <PosterHorizontalList
          title="Mejores Puntuadas"
          items={topRatedQuery.data?.pages.flat() ?? []}
          href="/movies/top_rated"
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <PosterHorizontalList
          title="Próximamente"
          items={upcomingQuery.data ?? []}
          href="/movies/upcoming"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
