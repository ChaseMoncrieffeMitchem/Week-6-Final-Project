import React from "react";

export default function () {

    async function movies() {
        const movieApi = await fetch("http://www.omdbapi.com/?apikey=f5bbb04b&s=fast")
        const movieApi2 = await movieApi.json()
        console.log(movieApi2)
    }
    movies()


  return (
    <div>
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
    </div>
  );
}
