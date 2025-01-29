export async function getSearch(query: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjA0ODRhZTgxMjlkMTc0YWQxMzQxNWZmNzMzOTZjMCIsIm5iZiI6MTcyODk1MjU1MS4yNzYwNTIsInN1YiI6IjY1ZTY2YjZjZGM4NjQ3MDE4NzRmMzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOmV67ez59WQwZTPANplUdUV7uDgaTvJMM-LXc5g584",
    },
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=pt-BR&page=1`;

  try {
    const resp = await fetch(url, options);
    if (!resp.ok) throw new Error("Erro ao buscar filmes");

    const json = await resp.json();
    return json.results; // Retorna os filmes encontrados
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}


