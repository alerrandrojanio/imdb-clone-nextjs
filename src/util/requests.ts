const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
}
