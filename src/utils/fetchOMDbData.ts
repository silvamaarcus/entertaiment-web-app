import { BASE_URL, API_KEY } from "./omdbConfig";

export interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
}

export interface OMDbResponse {
  Search?: SearchResult[]; // Resultados de busca geral
  totalResults?: string; // Total de resultados
  Response: "True" | "False";
  Error?: string; // Mensagem de erro, se houver
  Title?: string; // Incluído para compatibilidade com buscas específicas
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: { Source: string; Value: string }[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: "movie" | "series" | "episode";
  totalSeasons?: string;
}

export const fetchOMDbData = async (search: string): Promise<OMDbResponse> => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${search}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API OMDb.");
  }

  return response.json();
};
