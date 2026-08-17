// Todo animación de "pulso" o respiración infinita
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

interface Props {
  width?: number | `${number}%`;
  height?: number;
  borderRadius?: number;
  className?: string;
}

const Skeleton = ({
  width = "100%",
  height = 20,
  borderRadius = 12,
  className,
}: Props) => {
  // El hook useRef se utiliza para crear un objeto mutable que persiste durante todo el ciclo de vida del componente.
  const opacity = useRef(new Animated.Value(0.4)).current; // La propiedad .current es cómo se accede al valor almacenado dentro del objeto que devuelve useRef.

  useEffect(() => {
    //Envuelve la secuencia para que se repita infinitamente una vez que termina.
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          easing: Easing.ease,
          useNativeDriver: true, // Delega la animación al hilo nativo de la UI para garantizar fluidez (60 FPS) sin bloquear el hilo de JavaScript.
        }),
      ]),
    );

    // Inicia la animación inmediatamente al montarse el componente.
    loop.start();
    return () => loop.stop(); // La función retornada es el mecanismo de limpieza (cleanup) de useEffect. Se ejecuta automáticamente en dos momentos críticos:

    // Cuando el componente se desmonta (se elimina de la pantalla).
    // Antes de volver a ejecutar el efecto (si alguna dependencia cambia).
  }, [opacity]);

  return (
    <Animated.View
      className={`${className}`}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#27272A",
        opacity,
      }}
    />
  );
};

export default Skeleton;
