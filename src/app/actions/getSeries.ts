
"use server" 

export async function getSeries(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjA0ODRhZTgxMjlkMTc0YWQxMzQxNWZmNzMzOTZjMCIsIm5iZiI6MTcyODk1MjU1MS4yNzYwNTIsInN1YiI6IjY1ZTY2YjZjZGM4NjQ3MDE4NzRmMzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOmV67ez59WQwZTPANplUdUV7uDgaTvJMM-LXc5g584'
        }
      };
      
      const resp = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=pt-BR', options)
      
      if (resp.ok){
        const json = await resp.json()
        return json.results
        
      }
      
      
}
