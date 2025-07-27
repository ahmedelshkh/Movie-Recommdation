import React from 'react';
import {useEffect, useState } from 'react';
import MovieInf from '../compontents/MovieInf';
import { useParams } from 'react-router-dom'
import MovieBox from '../compontents/PopularSec/MovieBox';

function MovieDetails() {
    let [movies,setMovies] = useState([]);
    let [movieDetails, setMovieDetails] = useState([]);
    const params = useParams();

    useEffect(function() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca2f3d2db9a9d962987a19acfaa549bb")
        .then(res => res.json())
        .then(data => setMovies(data.results))
        .catch(err => console.log(err));
    },[]);
    useEffect(function() {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ca2f3d2db9a9d962987a19acfaa549bb`)
        .then(data => data.json())
        .then(data => setMovieDetails(data))
        .catch(err => console.log(err));
    },[])
    console.log(movieDetails);
    

    return (
        <div className="movie-details">
            <MovieInf
                id={movieDetails.id}
                img={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                title={movieDetails.title}
                date={movieDetails.release_date}
                rate={movieDetails.vote_average}
                des={movieDetails.overview}
                lang={movieDetails.original_language}
                genres={movieDetails.genres}
                website={movieDetails.homepage}
                duration={movieDetails.runtime}
            />
            <h1>Recommendation</h1>
            <div className='content'>
                {
                    movies.map((movie) => {
                        return(
                            <MovieBox
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

export default MovieDetails;