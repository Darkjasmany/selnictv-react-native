export interface tvShow {
  id: number;
  name: string;
  description: string;
  firstAirDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface CompleteTvShow extends tvShow {
  genres: string[];
  numberOfSeasons: number;
  originalName: string;
  createdBy: string[];
  inProduction: boolean;
}
