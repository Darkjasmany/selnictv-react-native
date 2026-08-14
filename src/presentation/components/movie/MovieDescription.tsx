import { View, Text } from "react-native";
import React from "react";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { currencyFormatter } from "@/config/helpers/formatter";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View>
        <Text>{movie.rating.toFixed(2)}</Text>
        <Text> - {movie.genres.join(",  ")}</Text>
      </View>

      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>

      <Text className="mt-2 font-bold text-2xl">
        {currencyFormatter("USD", movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
