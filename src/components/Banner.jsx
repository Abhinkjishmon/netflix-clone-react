import React, { useEffect, useState } from 'react';
import instance from '../instance';
import requests from '../request';
import './Banner.css';


const Banner = () => {
    const [movie,setMovie] = useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData = async ()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
    }
    console.log('movie',movie);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='banner'
     style={{
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundImage:`url(${base_url}${movie.backdrop_path})`}}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie.name}
        </h1>
        <h2 className="banner_overview">{movie.overview}</h2>
      </div>
    </div>
  )
}

export default Banner