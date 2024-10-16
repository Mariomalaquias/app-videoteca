import { getDetails } from "@/app/actions/getDetails";
import Header from "@/components/Header";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export default async function Detalhes({params}: Params) {
    const filme = await getDetails(params.id)
    return(
        <main className="flex min-h-screen flex-col">
            <Header />
            
            <div className="flex">
                <img className="max-w-80" src={"https://image.tmdb.org/t/p/w500"+filme.poster_path} alt="" />
                <div>

                <h2>{filme.title}</h2>
                <p className="max-w-96">{filme.overview}</p>
                </div>
            </div>

        </main>
    )
}