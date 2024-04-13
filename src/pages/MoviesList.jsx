import React, { useEffect } from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch';



function MoviesList({api,title}) {
   
  
  const  {data} = useFetch(api)

  useEffect(()=>{
    document.title = `${title} / IMDB`
   })
 

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
       {data.map((movie)=> <Card movie={movie}  key={movie.id}/>)}
         
        </div>
      </section>
    </main>
  )
}

export default MoviesList
