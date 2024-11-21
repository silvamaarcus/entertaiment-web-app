import { BASE_URL, API_KEY } from "./omdbConfig";
import { OMDbResponse } from "./fetchOMDbData";

export const getMovieDetails = async (
  movieId: string,
): Promise<OMDbResponse> => {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(movieId)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar detalhes do filme: ${response.statusText}`,
      );
    }

    const data = (await response.json()) as OMDbResponse;

    if (data.Response === "False") {
      throw new Error(data.Error || "Erro desconhecido na resposta da API");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
