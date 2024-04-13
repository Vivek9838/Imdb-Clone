import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {MoviesList,MovieDetail,PageNotFound,Search} from '../pages'


function AllRoutes() {
  return (
  <div className='dark:bg-slate-500'>
     <Routes>
        <Route path='/' element={<MoviesList api="movie/now_playing" title="Home" />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='movie/popular' element={<MoviesList api="movie/upcoming" title="Popular" />} />
        <Route path='movie/top' element={<MoviesList api="movie/top_rated" title="Top Rated" />} />
        <Route path='movie/upcoming' element={<MoviesList api="movie/upcoming" title="Upcoming" />} />
        <Route path='search' element={<Search  api="search/movie"/>} />
        <Route path='*' element={<PageNotFound />} />
        </Routes>

  </div>
  )
}

export default AllRoutes
