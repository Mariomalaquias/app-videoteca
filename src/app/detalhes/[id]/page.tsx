import { getDetails } from "@/app/actions/getDetails";
import Header from "@/components/Header";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";


export default async function Detalhes({params}: Params) {
    const filme = await getDetails(params.id)
    return (
      <main className="flex min-h-screen flex-col bg-gradient-to-r from-blue-300 to-indigo-400 h-64 w-full">
        <Header />
        
        <div className="mt-5 flex justify-center gap-9 ">

          <Link href="/"><h3 className="bg-gray-700 text-amber-400 w-24  mg rounded-3xl text-3xl font-semibold m-3">voltar</h3></Link> 

          <img
            className="max-w-100 rounded-3xl"
            src={"https://image.tmdb.org/t/p/w500" + filme.poster_path}
            alt=""
          />
          <div className="">
            <h2 className="text-5xl font-bold mb-8">{filme.title}</h2>
            <p className="max-w-96 text-3xl font-semibold ">{filme.overview}</p>
          </div>
        </div>
      </main>
    );
}