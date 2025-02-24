"use client";

import { Popcorn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const buttonSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!search) return;
        console.log(search);
        router.push(`/busca?q=${search}`);
        setSearch("");
    };

    return (
        <header className="flex flex-wrap items-center justify-between bg-gray-500 p-4">
            {/* Logo */}
            <div className="flex items-center">
                <Popcorn className="text-amber-400 w-12 h-12 sm:w-16 sm:h-16" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-amber-400 font-bold ml-2">
                    <Link href="/">Videoteca</Link>
                </h1>
            </div>

            {/* Links de navegação */}
            <nav className="flex gap-4 md:gap-6 text-xl sm:text-2xl md:text-3xl text-amber-400 font-bold">
                <Link href="/filmes">Filmes</Link>
                <Link href="/series">Séries</Link>
            </nav>

            {/* Barra de pesquisa */}
            <form 
                onSubmit={buttonSubmit} 
                className="flex w-full sm:w-auto mt-3 sm:mt-0"
            >
                <input
                    type="text"
                    placeholder="Buscar filme..."
                    className="flex-1 p-2 rounded-l-md border-none focus:outline-none text-sm sm:text-base"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button 
                    type="submit"
                    className="bg-amber-400 text-gray-800 px-3 sm:px-4 py-2 rounded-r-md font-bold text-sm sm:text-base"
                >
                    Buscar
                </button>
            </form>
        </header>
    );
}

