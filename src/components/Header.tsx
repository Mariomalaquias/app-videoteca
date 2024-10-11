import { Popcorn } from "lucide-react";
import Link from "next/link";


export default function Header() {

    return (
        <div>
            <header className="flex">
            <Popcorn />
                <h1><a href="/">Videoteca</a></h1>
                <ol>
                    <ul><Link href="/filmes">Filmes</Link></ul>
                    <ul><Link href="">series</Link></ul>
                </ol>
            </header>
        </div>

    )
}