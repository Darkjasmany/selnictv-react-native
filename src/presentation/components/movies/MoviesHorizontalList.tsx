import {
  View,
  Text,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";
import { useEffect, useRef } from "react";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

/**
 * El hook useRef en React sirve principalmente para dos propósitos:

Acceder y manipular elementos del DOM: Permite obtener una referencia directa a un nodo del DOM (como un <input> o un <div>) para realizar acciones imperativas, como enfocar un campo, seleccionar texto o medir sus dimensiones.

Persistir valores mutables sin provocar re-renderizados: A diferencia de useState, modificar la propiedad .current de un ref no vuelve a renderizar el componente. Esto es útil para guardar identificadores de temporizadores, intervalos o valores previos que necesitan sobrevivir entre renderizados pero no deben afectar la interfaz visual inmediatamente.
 * @returns 
 */
const MoviesHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false); // se usa el useRef

  // 5. Defino el useEffect para realizar el cambio
  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return; // empiezo a cargar esto va a impedir que se siga ejecutando

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width; // determinar si estoy cerca del final del scroll o llegue al final

    if (!isEndReached) return; // Si no esta al final no hago nada

    isLoading.current = true; // evitar que al hacer scroll se vuelva hacer todo este proceso

    // TODO:
    console.log("Cargar la siguiente películas");

    loadNextPage && loadNextPage(); // si nosotros tenemos 1 valor definido va a ejcutar la funcion
  };

  return (
    <View className={`${className}`}>
      {title && <Text className="font-bold text-3xl px-4 mb-2">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false} // Para que no se muestre la barra de scroll horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }} // Para que no se pegue a los bordes de la pantalla
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterPath={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MoviesHorizontalList;
