import React,{useEffect} from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

function Search({ api }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data } = useFetch(api, queryTerm);

  useEffect(()=>{
    document.title = `Search result for ${queryTerm} / IMDB`
   })

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark=text-white">
          {data.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
          {data.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Search;
