import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Importing custom components, types and functions
import type Movie from '../../types/movieType';
import MovieList from '../MovieList';

// Material UI Imports
import CircularProgress from '@mui/material/CircularProgress';

const getStoredFavorites: () => string[] = () => {
  let storedFavorites: string[];
  try {
    storedFavorites =
      localStorage.getItem('favorites') !== null
        ? JSON.parse(localStorage.getItem('favorites') as string)
        : [];
  } catch (error) {
    storedFavorites = [];
  }

  return storedFavorites;
};

const Favorite = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('favorites') === null) {
      return;
    }

    const storedFavorites = getStoredFavorites();
    setLoading(true);
    setMovies([]);
    const fetchMovies: () => Promise<void> = async () => {
      try {
        const movieRequests = storedFavorites.map(async (movieId: string) => {
          const response = await axios.get(
            `http://www.omdbapi.com/?i=${movieId}&apikey=51990a2e`
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
        <MovieList movies={movies} setMovies={setMovies} />
      )}
    </>
  );
};

export default Favorite;
