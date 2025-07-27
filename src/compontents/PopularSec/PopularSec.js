import React from 'react';
import {useEffect, useState } from 'react';
import MovieBox from './MovieBox';

function PopularSec() {
    let [movies,setMovies] = useState([]);

    useEffect(function() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca2f3d2db9a9d962987a19acfaa549bb")
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(err => console.log(err));
    },[])

    return (
        <div className="popular">
            <h1>Popular</h1>
            <div className='content'>
                {
                    movies.map((movie) => {
                        return(
                            <MovieBox
                            key={movie.id}
                            id={movie.id}
                            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            title={movie.title}
                            date={movie.release_date}
                            rate={movie.vote_average}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularSec;