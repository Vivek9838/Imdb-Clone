import React, { useEffect } from 'react';
import Notfound from '../assets/download.jpeg'
import { Link } from 'react-router-dom';


function PageNotFound() {
  

  useEffect(()=>{
    document.title = `Page Not Found / IMDB`
   })




  return (
    <main>
     <section className='flex flex-col justify-center px-2'>
      <div className='flex flex-col items-center my-4 mt-6'>
        <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
         <img className='rounded ' src={Notfound} alt="" />
      </div>
      <div className='flex justify-center '>
        <Link to="/">
        <button className='w-64 text-xl bg-red-500 rounded-lg p-4 text-white'>Back To Home</button>
        </Link>
        
      </div>
     </section>
    </main>
  )
}

export default PageNotFound
