
"use client";

import Card from "@/components/card";
import Header from "@/components/Header";
import { Title } from "@/components/title";
import { getSearch } from "../actions/getSearch";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q"); // Pegando o valor da query string (?q=)
  
  const [movies, setMovies] = useState([]); // Estado para armazenar os filmes

  useEffect(() => {
    if (!query) return; // Se não houver query, não faz nada

    const fetchMovies = async () => {
      try {
        const moviesData = await getSearch(query); // Passa a query para buscar os filmes
        setMovies(moviesData); // Atualiza o estado com os filmes buscados
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [query]); // Executa o efeito quando "query" muda

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-slate-400">
        <Title>Filmes</Title>
        <h2 className="title">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <section className="flex flex-wrap gap-4">
          {movies.length > 0 ? (
            movies.map((filme) => <Card key={filme.id} filme={filme} />)
          ) : (
            <p className="text-lg text-gray-700">Nenhum filme encontrado.</p>
          )}
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Rodapé</p>
      </footer>
    </div>
  );
}








