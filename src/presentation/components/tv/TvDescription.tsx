import { CompleteTvShow } from "@/infrastructure/interfaces/tv.interface";
import { Text, View } from "react-native";

interface Props {
  tvShow: CompleteTvShow;
}

const TvDescription = ({ tvShow }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex-row items-center">
        <Text className="text-white">{tvShow.rating.toFixed(2)}</Text>
        <Text className="text-gray-400"> - {tvShow.genres.join(", ")}</Text>
      </View>

      <Text className="font-bold mt-5 text-white">Historia</Text>
      <Text className="font-normal mt-2 text-gray-300">
        {tvShow.description}
      </Text>
    </View>
  );
};

export default TvDescription;
