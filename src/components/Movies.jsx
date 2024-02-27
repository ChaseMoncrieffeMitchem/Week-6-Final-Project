import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=f5bbb04b&s=${id}`
      );
      setMovies(data);
    }
    getMovies();
  }, []);

  return (
    <>
      {movies.map(elem => <div></div>)}
    </>
  );
}

export default Movies;