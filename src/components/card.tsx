"use client"

import {useFavorite} from "@/app/hooks/useFavoritos";
import { Bookmark, BookmarkCheck, Heart } from "lucide-react";
import { useEffect, useState } from "react";

type CardProps = {
    filme: filme
}


export default function Card({filme}: CardProps) {

    const {clickFavorite, clickUnFavorite, favorite, loadFavorite}= useFavorite(filme)

    useEffect( () => loadFavorite(), [])
    return (
        <div className="flex flex-col items-center w-52 relative">
            {(favorite)?
            <BookmarkCheck onClick={clickUnFavorite} className="absolute right-1 top-2 cursor-pointer text-white" /> :
            <Bookmark onClick={clickFavorite} className="absolute right-1 top-2 cursor-pointer text-white"/>}
            
            <a href={"/detalhes/" + filme.id }><img className="rounded-xl" src= {"https://image.tmdb.org/t/p/w500"+filme.poster_path} alt="" /></a>
            <h2 className="line-clamp-1" >{filme.title}</h2>
            <div className="flex gap-1">
                <Heart />
                <h3>{filme.vote_average.toFixed(1)}</h3>
            </div>
            <a href={"/detalhes/" + filme.id }>detalhes</a>

            
        </div>
    )
}