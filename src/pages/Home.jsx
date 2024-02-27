import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&s=fast`
    );
    console.log(data);
    setMovies(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
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
    </div>
  );
}
