import React from "react";

export default function () {
  return (
    <div>
      <nav>
        <div className="nav__container container">
          <div className="nav__row row">
            <div className="movie__search--container">
              <label className="movie__search--label">Search by Movie Title</label>
              <input type="text" onChange="onSearchChange(event)" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
