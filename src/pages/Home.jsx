import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [searchTitle, setSearchTitle] = useState();

  function filterMovies(filter) {
    if(!movies) return;
    if (filter === "A_TO_Z") {
        setMovies([...movies].sort((a, b) => (a.Title > b.Title ? 1 :-1)))
    }
    if (filter === "Z_TO_A") {
        setMovies([...movies].sort((a, b) => b.Title > a.Title ? 1 : -1))
    }
    if (filter === "RELEASE DATE") {
        setMovies([...movies].sort((a, b) => a.Year > b.Year ? 1 : -1))
    }
  }

  function onSearch() {
    setMoviesLoaded(4);
    fetchMovies(searchTitle);
  }

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moviesLoaded, setMoviesLoaded] = useState(4);

  

  async function fetchMovies(movieTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&s=${movieTitle || "avengers"}`
    );
    setLoading(false);
    setMovies(data.Search);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies(searchTitle);
  }, []);

  

  return (
    <div>
      <nav>
        <div className="nav__container container">
          <div className="nav__row row">
            <div className="movie__search--container">
              <label className="movie__search--label">
                Search by Movie Title
              </label>
              <input
                type="text"
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              <button onClick={() => onSearch()}>Enter</button>
              <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="A_TO_Z">A to Z</option>
                <option value="Z_TO_A">Z to A</option>
                <option value="RELEASE DATE">Release Date</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.slice(0, moviesLoaded).map((elem) => (
          <div className="container" key={elem.imdbID}>
            <div className="row">
              <div className="movie-list">
                <div className="movie">
                  <div className="movie-card">
                    <div className="movie-card__container">
                      <h3 className="movie-poster">
                        <img src={elem.Poster} alt="" />
                      </h3>
                      <p className="movie-title">{elem.Title}</p>
                      <p className="movie-year">{elem.Year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {moviesLoaded < 10 && (
        <div>
          <button
            className="movieLoaded__btn"
            onClick={() => setMoviesLoaded(moviesLoaded + 2)}
          >
            Load more Movies
          </button>
        </div>
      )}
      {!loading && (!movies || movies.length === 0) && (
        <div>
          <p>No Movies found</p>
        </div>
      )}
    </div>
  );
}
