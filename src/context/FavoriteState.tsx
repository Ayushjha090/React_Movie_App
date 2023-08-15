import React, { useState, useEffect } from 'react';

// Context and Helper function Import
import FavoriteContext from './favoriteContext';
import { getStoredFavorites } from '../configs/helper';

const FavoriteState = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  // States
  const [favorites, setFavorites] = useState<Set<string>>(new Set<string>());

  // Hooks
  useEffect(() => {
    if (localStorage.getItem('favorites') === null) {
      return;
    }

    const storedFavorites = getStoredFavorites();

    setFavorites(new Set<string>(storedFavorites));
  }, []);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteState;
