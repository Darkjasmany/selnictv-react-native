// TODO: Se crea una instancia de QueryClient para manejar el estado de las consultas y la caché de datos en la aplicación. Esto nos permite centralizar la configuración de las consultas y reutilizarla en diferentes partes de nuestra aplicación.

// TODO: Para que el deslizamiento (swipe) funcione sin quedarse atascado, el GestureHandlerRootView no debe ir en el componente del carrusel ni en el HomeScreen. Debe ir en tu archivo principal de navegación. Regla de Expo Router.

// Se renderiza el componente Stack que nos permite manejar la navegación entre las diferentes pantallas de nuestra aplicación.

// TODO <Tab.Screen> es un componente de React Navigation utilizado para definir cada pestaña individual dentro de un navegador de pestañas (como createBottomTabNavigator).  Sus propiedades esenciales son:
// name: Define la ruta o identificador único de la pestaña para la navegación.
// component: Especifica el componente de React que se renderizará cuando esa pestaña esté activa.
// <Tab> (o la constante Tab creada con createBottomTabNavigator) actúa como el contenedor principal o "wrapper" que gestiona el estado y la lógica de las pestañas. Dentro de esta etiqueta se anidan las etiquetas <Tab.Screen> para estructurar la barra de navegación inferior, permitiendo además configurar opciones globales mediante screenOptions.

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="movie/[id]" />
          <Stack.Screen name="tv/[id]" />
          <Stack.Screen name="person/[id]" />
          <Stack.Screen name="collection/[id]" />
          <Stack.Screen name="tv/[category]" />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
