import React from 'react'
import MovieCard from '../Components/MovieCard'
import {useState} from 'react'

const Home = () => {

    const [searchTerm, setSearchTerm] = React.useState('')

    const movies = [
        { id: 1, title: 'John Doe', release_date: '2022-01-01' },
        { id: 2, title: 'Jane Smith', release_date: '2023-01-01' },
        { id: 3, title: 'Bob Johnson', release_date: '2024-01-01' },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchTerm);
        setSearchTerm('');
     }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text" 
                    placeholder='Search for a movie...' 
                    className='search-input' 
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    />

                <button type="submit" className='search-button'>Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(movie => 
                    movie.title.toLowerCase().startsWith(searchTerm) && (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                )}
            </div>
        </div>
    )
}

export default Home
