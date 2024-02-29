import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  return (
    <div>
        {movies.map((movie, index) => {
            return (
                <MovieCard 
                    key={index}
                    image={movie.Poster}
                    name={movie.Title}
                    year={movie.Year}
                />
            )
        })}
    </div>
  )
}

