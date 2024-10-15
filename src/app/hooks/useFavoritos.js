import { useState } from "react";

export function useFavorite(filme) {

const [favorite, setFavorite] = useState(false)

function clickFavorite() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];//JSON.parse converte de string para array para conseguirmos ler novamente.
    favoritos.push(filme)
    localStorage.setItem("favoritos", JSON.stringify(favoritos))//o JSON.stringfy serve para converter o array em string ja que ele não salva no formato array
    setFavorite(true)
    
}

function clickUnFavorite() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritosAtual = favoritos.filter(f => f.id !== filme.id)
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtual))
    setFavorite(false) 
}

function loadFavorite() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        const favorito = favoritos.find(f => f.id === filme.id)
        setFavorite(favorito)
}

return {
    favorite,
    clickFavorite,
    clickUnFavorite,
    loadFavorite
    
}
}