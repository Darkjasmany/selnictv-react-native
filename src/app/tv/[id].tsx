import { tvByIdAction } from "@/core/actions/tv/tv-by-id.action";
import { tvCreditsAction } from "@/core/actions/tv/tv-credits.action";
import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import TvDescription from "@/presentation/components/tv/TvDescription";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TvScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const tvQuery = useQuery({
    queryKey: ["tv", +id],
    queryFn: () => tvByIdAction(+id),
  });
  const castQuery = useQuery({
    queryKey: ["tv", +id, "credits"],
    queryFn: () => tvCreditsAction(+id),
  });

  if (tvQuery.isLoading || !tvQuery.data) {
    return (
      <View className="flex-1 bg-[#09090B] justify-center items-center">
        <Text className="mb-4 text-white">Espere por favor</Text>
        <ActivityIndicator color="#8B5CF6" size={30} />
      </View>
    );
  }

  const tv = tvQuery.data;

  return (
    <ScrollView className="bg-[#09090B]">
      <MovieHeader
        originalTitle={tv!.originalName}
        poster={tv!.poster}
        title={tv!.name}
      />
      <TvDescription tvShow={tv} />
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default TvScreen;
