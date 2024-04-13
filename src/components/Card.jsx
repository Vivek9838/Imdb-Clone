import React from 'react';
import { Link } from 'react-router-dom'

function Card({movie}) {
 const image =movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://images.pexels.com/photos/17151647/pexels-photo-17151647/free-photo-of-several-transparent-compact-audio-cassettes-with-visible-tape-and-red-inner-reels-placed-randomly-on-a-blue-background-selective-focus-technique.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

  return (
    <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 mt-12">
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/movie/${movie.id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
    </Link>
    <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
        <p className="mb-3 font-normal  text-green-500 dark:text-green-500">Popularity:- {movie.popularity}</p>
        <p className="mb-3 font-normal text-green-500 dark:text-green-500">Release_date:- {movie.release_date}</p>
       
    </div>
</div>
    </div>
  )
}

export default Card
