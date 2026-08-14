import axios from "axios";

// TODO: Creamos una instancia de axios para la API de películas, configurando la URL base y los parámetros necesarios para las solicitudes. Esto nos permite centralizar la configuración de la API y reutilizarla en diferentes partes de nuestra aplicación.
export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    language: "en-MX",
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY,
  },
});
