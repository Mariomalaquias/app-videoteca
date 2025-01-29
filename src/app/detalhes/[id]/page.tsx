import { getDetails } from "@/app/actions/getDetails";
import Header from "@/components/Header";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";


export default async function Detalhes({params}: Params) {
    const filme = await getDetails(params.id)
    return (
      <main className="flex min-h-screen flex-col">
        <Header />

        <div className="flex">
            <Link href="/"><h3>voltar</h3></Link>
            
          <img
            className="max-w-100"
            src={"https://image.tmdb.org/t/p/w500" + filme.poster_path}
            alt=""
          />
          <div>
            <h2>{filme.title}</h2>
            <p className="max-w-96">{filme.overview}</p>
          </div>
        </div>
      </main>
    );
}