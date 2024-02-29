import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTitle, setSearchTitle] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  

  function onSearch() {
    fetchMovies(searchTitle);
  }

  async function fetchMovies(movieTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&s=${movieTitle}`
    );
    setLoading(false);
    setMovies(data);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  
  async function pageMovies() {
    setLoading(true)
    const response= await axios.get(`http://www.omdbapi.com/?apikey=f5bbb04b&page=${postsPerPage}`)
    setLoading(false)
    setMovies(response.data)
  }

  useEffect(() => {
    pageMovies()
  }, [currentPage])
  

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex)

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
            </div>
          </div>
        </div>
      </nav>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.Search.map((elem) => (
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
      {loading ? (<h1>Loading...</h1>) : (currentPosts)}
    </div>
  );
}
