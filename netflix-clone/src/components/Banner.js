import React, { useState, useEffect } from 'react';
import axios from './Axios';
import requests from './Requests';
import './Banner.css';

function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []); 
    console.log(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
    <header className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
    >
        <div className='banner__contents'>
            {/* { title} */}
            <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
            </h1>
                {/* { div > 2 buttons } */}
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{movie?.overview}</h1>
                {truncate(movie?.overview, 150)}
        {/* { description } */}
        </div>
        <div className='banner__fadeBottom'/>
    </header>
)
}

export default Banner