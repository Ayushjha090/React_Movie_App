import React from 'react';

// Importing Custom components, Functions
import type Movie from '../../types/movieType';
import MovieCard from '../MovieCard';

// Importing Material UI Components
import Typography from '@mui/material/Typography';

const MovieList = ({
  movies,
  setMovies,
}: {
  movies: Movie[];
  setMovies: (data: Movie[]) => void;
}): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: '#f2f2f2',
        minHeight: '80vh',
        width: '100%',
        padding: '10px 0',
        boxSizing: 'border-box',
      }}
    >
      {movies !== undefined && movies.length > 0 ? (
        movies.map((movie: Movie, index: number) => {
          return <MovieCard key={index} movie={movie} />;
        })
      ) : (
        <Typography variant="h6" align="center">
          No Movie is Avaialable
        </Typography>
      )}
    </div>
  );
};

export default MovieList;
