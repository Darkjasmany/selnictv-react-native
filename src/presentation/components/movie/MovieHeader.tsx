import { router } from "expo-router";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions(); // ontener la altura de la pantalla y la renombro

  return (
    <>
      {/* Gradiente */}
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={[0, 0]} // empieze de la esquina superior izquierda hasta la esquina inferior derecha , si pongo 1 seria al final de todo el espacio dado
        style={{
          height: screenHeight * 0.4, // ocupe un 40% de la pantalla
          position: "absolute",
          zIndex: 1, // asegurarme que este arriba
          width: "100%",
        }}
      />

      {/* Botón de regreso */}
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        {/* router.dismiss() Cierra esa pantalla y cierra esa seccion */}
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>

      <View
        style={{ height: screenHeight * 0.7 }} // Ocupe el 70% de la pantalla
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        <Text className="font-normal">{originalTitle}</Text>
        <Text className="font-semibold text-2xl">{title}</Text>
      </View>
    </>
  );
};
export default MovieHeader;
