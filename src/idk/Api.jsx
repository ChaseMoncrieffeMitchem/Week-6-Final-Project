import axios from 'axios';
import React, { useEffect } from 'react'

export default function Api({movies: initialMovies}) {
    const [movies, setMovies] = useState([initialMovies]);

    async function fetchMovies(movieTitle) {
        // setLoading(true)
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=f5bbb04b&s=${movieTitle || "avengers"}`
        );
        // setLoading(false)
        setMovies(data.Search);
        console.log(data);
      }
    
      useEffect(() => {
        fetchMovies(movies);
      }, []);

  return (
    <div>

    </div>
  )
}
