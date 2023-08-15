// This file is for storing helper functions and constants so that the functions can be called in any component

// Constants
export const API_KEY =
  process.env.REACT_APP_API_KEY !== null ||
  process.env.REACT_APP_API_KEY !== undefined
    ? String(process.env.REACT_APP_API_KEY)
    : '';

// Functions
export const getStoredFavorites: () => string[] = () => {
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
