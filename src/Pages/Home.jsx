import React from 'react'

const Home = () => {
    const movies = [
        {id: 1, title: 'Movie 1', release_date: '2022-01-01'},
        {id: 2, title: 'Movie 2', release_date: '2023-01-01'},
        {id: 3, title: 'Movie 3', release_date: '2024-01-01'},
        ]

  return (
    <div className="home">
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
