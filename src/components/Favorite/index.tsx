import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// Importing custom components, types and functions
import type Movie from '../../types/movieType';
import MovieList from '../MovieList';
import favoriteContext from '../../context/favoriteContext';
import { API_KEY } from '../../configs/helper';

// Material UI Imports
import CircularProgress from '@mui/material/CircularProgress';

const Favorite = (): JSX.Element => {
  // Context
  const { favorites, setFavorites } = useContext(favoriteContext);

  // States
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Hooks
  useEffect(() => {
    if (favorites === null || API_KEY === '') {
      return;
    }

    const storedFavorites = Array.from(favorites);
    setLoading(true);
    setMovies([]);
    const fetchMovies: () => Promise<void> = async () => {
      try {
        const movieRequests = storedFavorites.map(async (movieId: string) => {
          const response = await axios.get(
            `http://www.omdbapi.com/?i=${movieId}&apiKey=${API_KEY}`
          );
          return {
            Title: response.data.Title,
            Year: response.data.Year,
            imdbID: response.data.imdbID,
            Type: response.data.Type,
            Plot: response.data.Plot,
            Poster: response.data.Poster,
          };
        });

        const fetchedMovies = await Promise.all(movieRequests);
        setMovies(fetchedMovies);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchMovies().catch((error) => {
      console.error('An error occurred while fetching movies:', error);
    });
  }, []);

  // Function to remove favorite movies from state on favorites page
  const handleRemoveFavorites: (data: string) => void = (movieId: string) => {
    let storedFavorites = Array.from(favorites);
    storedFavorites = storedFavorites.filter((id: string) => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));
    setFavorites(new Set<string>([...storedFavorites]));
    setMovies((prevMovies: Movie[]) => {
      return prevMovies.filter((movie: Movie) => movie.imdbID !== movieId);
    });
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundColor: '#f2f2f2',
            width: '100%',
            height: '80vh',
            padding: '40vh 0', // because the height of the div is 80vh and by setting padding-y to 40vh the circular progress is in center
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <MovieList
          movies={movies}
          setMovies={setMovies}
          handleRemove={handleRemoveFavorites}
        />
      )}
    </>
  );
};

export default Favorite;
