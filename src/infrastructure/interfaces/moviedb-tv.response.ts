export interface MovieDBTvShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  number_of_seasons?: number;
  original_name?: string;
  in_production?: boolean;
  created_by?: { id: number; name: string; profile_path: string | null }[];
  genres?: { id: number; name: string }[];
}
