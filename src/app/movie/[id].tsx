import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import { useCast } from "@/presentation/hooks/useCast";
import MovieCast from "@/presentation/components/movie/MovieCast";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);

  const { castQuery } = useCast(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }
  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />
      {/* TODO 6 llamar al componente  */}
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
