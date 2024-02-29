import React from 'react'

export default function MovieCard({ Poster, Title, Year}) {
  return (
    <div>
        <div>
            <img src={Poster} alt={Title} />
        </div>
        <div>
            <h2>{Title}</h2>
            <h3>{Year}</h3>
        </div>
    </div>
  )
}
