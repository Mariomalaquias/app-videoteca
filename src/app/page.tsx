"use client"



import Card from "@/components/card";
import Header from "@/components/Header";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
        
        
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Title>Filmes em alta</Title>
          <section className="flex flex-wrap gap-4" >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        
        <Title>Séries em alta</Title>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
