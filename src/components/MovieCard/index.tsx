import React, { useState, useEffect } from 'react';

// Importing custom components and functions
import type Movie from '../../types/movieType';

// Material UI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const MovieCard = ({ movie }: { movie: Movie }): JSX.Element => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set<string>([]));

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

  useEffect(() => {
    if (localStorage.getItem('favorites') === null) {
      return;
    }

    const storedFavorites = getStoredFavorites();

    setFavorites(new Set<string>(storedFavorites));
  }, []);

  const handleFavorite: (data: string) => void = (movieID: string) => {
    const storedFavorites = getStoredFavorites();
    setFavorites((prevFavorites) => {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...storedFavorites, movieID])
      );
      return new Set<string>([...prevFavorites, movieID]);
    });
  };

  const handleRemoveFavorite: (data: string) => void = (movieID: string) => {
    let storedFavorites = getStoredFavorites();
    storedFavorites = storedFavorites.filter((id: string) => id !== movieID);
    localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));
    setFavorites(new Set<string>([...storedFavorites]));
  };

  return (
    <Card
      sx={{
        width: '50%',
        height: 350,
        my: 3,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <CardMedia
        image={movie.Poster}
        sx={{ height: '100%', width: '35%' }}
      ></CardMedia>
      <CardContent
        sx={{
          width: '65%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Typography variant="h6">{movie.Title}</Typography>
        <Typography variant="body2">{movie.Plot}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Year - {movie.Year}</Typography>
          {favorites.has(movie.imdbID) ? (
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                handleRemoveFavorite(movie.imdbID);
              }}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                handleFavorite(movie.imdbID);
              }}
            >
              Add to favorites
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
