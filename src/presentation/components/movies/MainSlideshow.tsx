import React, { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import { Carousel } from "react-native-reanimated-carousel";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<any>(null);
  const { width } = useWindowDimensions(); // De esta manera obtenemos el ancho de la pantalla del dispositivo para ajustar el tamaño del carrousel

  // Manera como se quiere renderizar cada item del carrousel, en este caso se renderiza un componente MovieCard que recibe como props la pelicula
  // width es el grosor de las tarjetas internas del carrousel, en este caso se quiere que parezcan tarjetas
  return (
    <View id="carousel-component" className="h-[250px] w-full">
      <Carousel
        autoplayInterval={2000} // Intervalo de tiempo para que el carrousel avance automaticamente
        ref={ref}
        data={movies}
        loop // loop={true} // Para que el carrousel se repita infinitamente, si es una propiedad booleana, no es necesario poner el valor, solo con poner la propieadad es suficiente
        style={{
          width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }} // Ancho y alto del carrousel
        itemSize={200} // Un tamaño de item más angosto para forzar el rectángulo vertical
        defaultIndex={1} // Indice inicial del carrousel, en este caso se quiere que empiece en la segunda tarjeta
        layout={{
          type: "parallax", // Tipo de layout del carrousel
          scale: 0.9, // Escala de las tarjetas internas del carrousel
          offset: 50, // Offset de las tarjetas internas del carrousel
        }}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterPath={item.poster} />
        )}
      />
    </View>
  );
};

export default MainSlideshow;
