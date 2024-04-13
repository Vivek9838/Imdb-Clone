import React from 'react'
import { useState,useEffect } from 'react'

function useFetch(api,queryTerm="") {
   const [data,setData] = useState([]);
   const url=`https://api.themoviedb.org/3/${api}?api_key=32feabce4459fb1d772d1b9cb8b9f13c&query=${queryTerm}`

   useEffect(()=>{
    async function fetchMovie(){
      const response = await fetch(url)
      const json = await response.json();
      setData(json.results);
    }
    fetchMovie()
  },[url])
 
  return { data }
}

export default useFetch
