"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Title } from "@/components/title";

import Card from "@/components/card";
import Footer from "@/components/footer";
import { getSeries } from "../actions/getSeries";

const Carousel = ({ popular }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; // Número de itens visíveis por vez

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === popular.length - itemsToShow ? prevIndex : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Botão Retroceder */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 z-10"
        onClick={handlePrev}
      >
        {"<"}
      </button>

      {/* Carrossel */}
      <div
        className="flex gap-4 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
        }}
      >
        {popular.map((filme, index) => (
          <div
            key={filme.id}
            className="w-48 flex-shrink-0 snap-start"
            style={{ minWidth: "20%" }} // Ajuste o tamanho aqui
          >
            <Card filme={filme} />
          </div>
        ))}
      </div>

      {/* Botão Avançar */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 z-10"
        onClick={handleNext}
      >
        {">"}
      </button>
    </section>
  );
};

export default async function Home() {
  const popular = await getSeries();
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="flex flex-col h-screen gap-4 row-start-2 items-center sm:items-start bg-slate-400">
        <Title>Séries</Title>
        <Carousel popular={popular} />
      </main>
      <Footer />
    </div>
  );
}