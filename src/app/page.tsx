"use server"

import Card from "@/components/card";
import Header from "@/components/Header";
import { Title } from "@/components/title";
import { getMovies } from "./actions/getMovies";
import { getSeries } from "./actions/getSeries";

export default async function Home() {
  const filmes: filme[] = await getMovies()
  const series: filme[] = await getSeries()
  
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-slate-400">
        <Title >Filmes em alta</Title>
          <section className="flex flex-wrap gap-4" >
            {filmes.map(filme => < Card key={filme.id} filme={filme} />)}
            
          </section>
        
        <Title>Séries em alta</Title>
          <section className="flex flex-wrap gap-4">
          {series.map(filme => < Card key={filme.id} filme={filme} />)}
          </section>
        <Title>Novidades</Title>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
