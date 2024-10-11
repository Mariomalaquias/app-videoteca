import { Heart } from "lucide-react";


export default function Card() {

    return (
        <div className="flex flex-col items-center w-52">
            <img className="rounded-xl" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mIvbfZFLJGwNvJKJcnYIppSbWdI.jpg" alt="" />
            <h2 className="line-clamp-1" >Nome do filmes</h2>
            <div className="flex gap-1">
                <Heart />
                <h3>5.5</h3>
            </div>
            <a href="">detalhes</a>

            
        </div>
    )
}