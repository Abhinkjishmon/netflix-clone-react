import React, { useEffect, useState } from 'react';
import instance from '../instance';
import './Row.css'


const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData = async () => {
        const response = await instance.get(fetchUrl)
        setMovies(response.data.results);
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(movies);
    return (
        <div>
            <h2>{title}</h2>
            <div className='movies_row'>
                {
                    movies.map((movie) => (
                        <img className='movie' src={`${base_url}${movie.backdrop_path}`} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default Row