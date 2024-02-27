import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  async function getMovies() {
    setLoading(true)
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&i=${id}`
    );
    setMovies(data);
    setLoading(false)
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
      
        <div className="container">
          <div className="row">
            <div className="movie-list">
              <div className="movie">
                <div className="movie-card">
                  <div className="movie-card__container">
                    <h3 className="movie-poster">
                      <img src="" alt="" />
                    </h3>
                    <p className="movie-title">Movie Title</p>
                    <p className="movie-year">Movie Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Movies;
