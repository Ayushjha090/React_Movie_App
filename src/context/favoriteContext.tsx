import { createContext } from 'react';

const favoriteContext = createContext<{
  favorites: Set<string>;
  setFavorites: React.Dispatch<React.SetStateAction<Set<string>>>;
}>({
  favorites: new Set<string>(),
  setFavorites: () => {},
});

export default favoriteContext;
