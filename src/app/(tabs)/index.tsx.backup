import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets(); // Obtenemos los valores de safe area para ajustar el contenido de la pantalla
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  // Aqui se puede manejar el estado de carga, error y exito de la consulta de películas
  // Por ejemplo, si la consulta está cargando, se puede mostrar un indicador de carga

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    // TODO Usamos ScrollView para que el contenido de la pantalla sea desplazable, ya que puede haber muchas películas y no caben en la pantalla
    // TODO Ajustamos el padding superior de la vista para que no se superponga con la barra de estado del dispositivo segun los valores de safe area obtenidos por useSafeAreaInsets, safeArea.top nos da el valor del padding superior necesario para que el contenido no se superponga con la barra de estado del dispositivo

    <ScrollView>
      <View style={{ paddingTop: safeArea.top }} className="mt-2 pb-10">
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        {/* Carrousel de películas */}
        <MainSlideshow movies={nowPlayingQuery.data || []} />

        {/* Popular Movies List */}
        <MoviesHorizontalList
          title="Populares"
          movies={popularQuery.data || []}
          className="mb-5"
        />

        {/* Top Rated Movies List */}
        {/* 4. Para el infiniteQuery tenemos que pasar el loadNextPage */}
        <MoviesHorizontalList
          title="Mejores Puntuadas"
          movies={topRatedQuery.data?.pages.flat() || []}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* Upcoming Movies List */}
        <MoviesHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data || []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
