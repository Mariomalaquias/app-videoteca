"use client";

import { Popcorn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Alterado para "next/navigation" pois estamos no "use client"
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState("");
    const router = useRouter(); // Usando router do Next.js

    const buttonSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!search) return;
            console.log(search)
        // Redireciona para a página de busca com o parâmetro da pesquisa
        router.push(`/busca?q=${search}`);

        // Limpa o input após a busca
        setSearch("");
    };

    return (
        <div>
            <header className="flex justify-between bg-gray-500 p-4">
                <div className="flex items-center">
                    <Popcorn className="text-5xl text-amber-400" />
                    <h1 className="text-7xl text-amber-400 font-bold ml-2">
                        <Link href="/">Videoteca</Link>
                    </h1>
                </div>

                <ol className="flex gap-5 items-center mr-5">
                    <li className="text-4xl text-amber-400 font-bold">
                        <Link href="/filmes">Filmes</Link>
                    </li>
                    <li className="text-4xl text-amber-400 font-bold">
                        <Link href="/series">Séries</Link>
                    </li>
                </ol>

                <form onSubmit={buttonSubmit} className="flex items-center">
                    <input
                        type="text"
                        placeholder="Digite o nome do filme"
                        className="p-2 rounded-l-md border-none focus:outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button 
                        type="submit"
                        className="bg-amber-400 text-gray-800 px-4 py-2 rounded-r-md font-bold"
                    >
                        Buscar
                    </button>
                </form>
            </header>
        </div>
    );
}
