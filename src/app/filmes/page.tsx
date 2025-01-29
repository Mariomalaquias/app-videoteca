"use server"

import Card from "@/components/card";
import Header from "@/components/Header";
import { Title } from "@/components/title";
import { getPopular } from "../actions/getPopular";
import { useSearchParams } from "next/navigation";


export default async function Home() {
  
  const popular: filme[] = await getPopular()

  
  
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-slate-400">
        <Title >Filmes</Title>
          <section className="flex flex-wrap gap-4" >
            {popular.map(filme => < Card key={filme.id} filme={filme} />)}
          </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Rodape</p>
      </footer>
    </div>
  );
}
