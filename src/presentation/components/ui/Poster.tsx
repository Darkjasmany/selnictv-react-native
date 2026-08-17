import { Image } from "expo-image"; // mismo uso que el import de react-native, mejora el rendimiento de los posters
import { router, type Href } from "expo-router";
import { Pressable } from "react-native";

interface Props {
  id: number;
  posterPath: string;
  smallPoster?: boolean;
  mediaType?: "movie" | "tv";
  className?: string;
}

const Poster = ({
  id,
  posterPath,
  smallPoster = false,
  mediaType = "movie",
  className,
}: Props) => {
  const route = mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`;
  return (
    // The Pressable component in React Native is the modern, recommended standard for handling touch interactions, replacing older components like TouchableOpacity.  It acts as a wrapper that detects various stages of press interactions (press in, press out, long press) and allows for dynamic styling based on the component's state.
    <Pressable
      className={`active:opacity-90 px-2 ${className ?? ""}`}
      onPress={() => router.push(route as Href)}
      // al presionar envia a la ruta referenciada
      // onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: posterPath }}
        className="shadow-lg rounded-2xl"
        // Todo: Se le define el style de la imagen para que tenga un tamaño diferente, no causa duplicidad con el className, ya que el className es para estilos de tailwind y el style es para estilos de react-native, se puede usar ambos a la vez.
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}

        resizeMode="cover" // Para que la imagen se ajuste al tamaño del contenedor sin deformarse, manteniendo su proporción original
      />
    </Pressable>
  );
};

export default Poster;
