"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Title } from "@/components/title";
import { getPopular } from "../actions/getPopular";
import Card from "@/components/card";
import Footer from "@/components/footer";

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
            className="w-1/5 flex-shrink-0 snap-start"
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
  const popular = await getPopular();
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-slate-400">
        <Title>Filmes</Title>
        <Carousel popular={popular} />
      </main>
      <Footer />
    </div>
  );
}






// "use server"

// import Card from "@/components/card";
// import Header from "@/components/Header";
// import { Title } from "@/components/title";
// import { getPopular } from "../actions/getPopular";
// import { useSearchParams } from "next/navigation";


// export default async function Home() {
  
//   const popular: filme[] = await getPopular()

  
  
//   return (
//     <div className="">
//       <header>
//         <Header />
//       </header>
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-slate-400">
//         <Title >Filmes</Title>
//           <section className="flex flex-wrap gap-4" >
//             {popular.map(filme => < Card key={filme.id} filme={filme} />)}
//           </section>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <p>Rodape</p>
//       </footer>
//     </div>
//   );
// }
