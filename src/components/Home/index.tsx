import React, { useState, useContext } from 'react';

// Importing custom components, functions and types
import MovieList from '../MovieList';
import type Movie from '../../types/movieType';
import favoriteContext from '../../context/favoriteContext';

const Home = (): JSX.Element => {
  // Context
  const { favorites, setFavorites } = useContext(favoriteContext);

  // States
  const [movies, setMovies] = useState<Movie[]>([
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1977',
      imdbID: 'tt0076759',
      Type: 'movie',
      Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      Year: '1980',
      imdbID: 'tt0080684',
      Type: 'movie',
      Plot: 'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Year: '1983',
      imdbID: 'tt0086190',
      Type: 'movie',
      Plot: 'After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
  ]);

  // Handler function for removing movie from favorites on home page
  const handleRemoveFavoritesFromHome: (data: string) => void = (
    movieId: string
  ) => {
    let storedFavorites = Array.from(favorites);
    storedFavorites = storedFavorites.filter((id: string) => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));
    setFavorites(new Set<string>([...storedFavorites]));
  };

  return (
    <MovieList
      movies={movies}
      setMovies={setMovies}
      handleRemove={handleRemoveFavoritesFromHome}
    />
  );
};

export default Home;
