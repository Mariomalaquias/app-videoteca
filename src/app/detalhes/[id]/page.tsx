import { getDetails } from "@/app/actions/getDetails";
import Header from "@/components/Header";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

export default async function Detalhes({ params }: Params) {
    const filme = await getDetails(params.id);

    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-indigo-400">
            <Header />

            <div className="container mx-auto p-4">
                {/* Botão de voltar */}
                <Link href="/">
                    <button className="bg-gray-700 text-amber-400 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-600 transition">
                        ← Voltar
                    </button>
                </Link>

                {/* Layout responsivo usando grid */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Poster do filme */}
                    <img
                        className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
                        src={"https://image.tmdb.org/t/p/w500" + filme.poster_path}
                        alt={filme.title}
                    />

                    {/* Detalhes do filme */}
                    <div className="text-white text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">{filme.title}</h2>
                        <p className="text-lg text-gray-800">{filme.overview}</p>

                        {/* Exibição das produtoras */}
                        {filme.production_companies.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-900">Produzido por:</h3>
                                <ul className="text-gray-800">
                                    {filme.production_companies.map((company: any) => (
                                        <li key={company.id}>{company.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Seção de atores */}
                        {filme.cast && filme.cast.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold text-gray-900">Atores:</h3>
                                <div className="flex flex-wrap gap-6 mt-4 justify-center md:justify-start">
                                    {filme.cast.map((actor: any) => (
                                        <div key={actor.id} className="text-center">
                                            <img
                                                className="w-24 h-36 object-cover rounded-lg shadow-md mb-2"
                                                src={"https://image.tmdb.org/t/p/w500" + actor.profile_path}
                                                alt={actor.name}
                                            />
                                            <p className="text-sm text-gray-800">{actor.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}




// import { getDetails } from "@/app/actions/getDetails";
// import Header from "@/components/Header";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
// import Link from "next/link";

// export default async function Detalhes({ params }: Params) {
//     const filme = await getDetails(params.id);

//     return (
//         <main className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-indigo-400">
//             <Header />

//             <div className="container mx-auto p-4">
//                 {/* Botão de voltar */}
//                 <Link href="/">
//                     <button className="bg-gray-700 text-amber-400 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-600 transition">
//                         ← Voltar
//                     </button>
//                 </Link>

//                 {/* Layout responsivo usando grid */}
//                 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                     {/* Poster do filme */}
//                     <img
//                         className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
//                         src={"https://image.tmdb.org/t/p/w500" + filme.poster_path}
//                         alt={filme.title}
//                     />

//                     {/* Detalhes do filme */}
//                     <div className="text-white text-center md:text-left">
//                         <h2 className="text-4xl font-bold mb-4 text-gray-900">{filme.title}</h2>
//                         <p className="text-lg text-gray-800">{filme.overview}</p>

//                         {/* Exibição das produtoras */}
//                         {filme.production_companies.length > 0 && (
//                             <div className="mt-4">
//                                 <h3 className="text-xl font-semibold text-gray-900">Produzido por:</h3>
//                                 <ul className="text-gray-800">
//                                     {filme.production_companies.map((company: any) => (
//                                         <li key={company.id}>{company.name}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }





