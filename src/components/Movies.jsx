import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

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
      {movies.map((elem) => (
        <div className="container">
          <div className="row">
            <div className="movie-list">
              <div className="movie">
                <div className="movie-card">
                  <div className="movie-card__container">
                    <h3 className="movie-poster">
                      <img src="" alt="" />
                    </h3>
                    <p className="movie-title">{elem.Title}</p>
                    <p className="movie-year">{elem.Year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Movies;
