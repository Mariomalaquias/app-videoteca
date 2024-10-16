"use server"

export async function getDetails(id: number) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjA0ODRhZTgxMjlkMTc0YWQxMzQxNWZmNzMzOTZjMCIsIm5iZiI6MTcyOTAzOTU2My44OTY2OTQsInN1YiI6IjY1ZTY2YjZjZGM4NjQ3MDE4NzRmMzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N9GAyvLyIvuuP1h0FBTv5uUxTl3JHtPOiQ_OlozKT4U'
        }
      };
      
      const resp = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=pt-BR', options)
      const json = await resp.json()
      return json  
}