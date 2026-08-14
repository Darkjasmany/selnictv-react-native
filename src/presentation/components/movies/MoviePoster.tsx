import { router } from "expo-router";
import { Pressable, Image } from "react-native";

interface Props {
  id: number;
  posterPath: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({
  id,
  posterPath,
  smallPoster = false,
  className,
}: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className ?? ""}`}
      onPress={() => router.push(`/movie/${id}`)}
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

export default MoviePoster;
