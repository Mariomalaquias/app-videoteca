"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Title } from "@/components/title";
import { getPopular } from "../actions/getPopular";
import Card from "@/components/card";
import Footer from "@/components/footer";
import { getSeries } from "../actions/getSeries";

// Definição do tipo para um filme
interface Filme {
  id: number;
  title: string;
  poster_path: string;
}

// Definição das props do carrossel
interface CarouselProps {
  popular: Filme[];
}

const Carousel: React.FC<CarouselProps> = ({ popular }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Número inicial de itens visíveis

  // Função para ajustar o número de itens exibidos com base na largura da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(2); // Menos itens em telas pequenas
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3); // Mais itens em telas médias
      } else {
        setItemsToShow(4); // Mais itens em telas grandes
      }
    };

    handleResize(); // Chama a função ao montar o componente
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avançar automaticamente o carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === popular.length - itemsToShow ? 0 : prevIndex + 1
      );
    }, 5000); // Altera a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [popular.length, itemsToShow]);

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
    <section className="relative w-full overflow-hidden mt-8">
      {/* Botão Retroceder */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg z-10 hover:bg-gray-700 transition-colors"
        onClick={handlePrev}
      >
        {"❮"}
      </button>

      {/* Carrossel */}
      <div
        className="flex gap-8 transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
        }}
      >
        {popular.map((filme: Filme, index: number) => (
          <div
            key={filme.id}
            className="w-64 flex-shrink-0 snap-start"
            style={{ minWidth: `${100 / itemsToShow}%` }} // Ajuste dinâmico do tamanho
          >
            <Card filme={filme} />
          </div>
        ))}
      </div>

      {/* Botão Avançar */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg z-10 hover:bg-gray-700 transition-colors"
        onClick={handleNext}
      >
        {"❯"}
      </button>
    </section>
  );
};

export default async function Home() {
  const popular: Filme[] = await getSeries();

  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <Title>Series</Title>

        {/* Carrossel Responsivo */}
        <div className="w-full max-w-7xl">
          <Carousel popular={popular} />
        </div>
      </main>

      <Footer />
    </div>
  );
}


// "use client";
// import { useState, useEffect } from "react";
// import Header from "@/components/Header";
// import { Title } from "@/components/title";

// import Card from "@/components/card";
// import Footer from "@/components/footer";
// import { getSeries } from "../actions/getSeries";

// const Carousel = ({ popular }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 5; // Número de itens visíveis por vez

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? 0 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === popular.length - itemsToShow ? prevIndex : prevIndex + 1
//     );
//   };

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Botão Retroceder */}
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 z-10"
//         onClick={handlePrev}
//       >
//         {"<"}
//       </button>

//       {/* Carrossel */}
//       <div
//         className="flex gap-4 transition-transform duration-300 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
//         }}
//       >
//         {popular.map((filme, index) => (
//           <div
//             key={filme.id}
//             className="w-48 flex-shrink-0 snap-start"
//             style={{ minWidth: "20%" }} // Ajuste o tamanho aqui
//           >
//             <Card filme={filme} />
//           </div>
//         ))}
//       </div>

//       {/* Botão Avançar */}
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 z-10"
//         onClick={handleNext}
//       >
//         {">"}
//       </button>
//     </section>
//   );
// };

// export default async function Home() {
//   const popular = await getSeries();
//   return (
//     <div className="">
//       <header>
//         <Header />
//       </header>
//       <main className="flex flex-col h-screen gap-4 row-start-2 items-center sm:items-start bg-slate-400">
//         <Title>Séries</Title>
//         <Carousel popular={popular} />
//       </main>
//       <Footer />
//     </div>
//   );
// }