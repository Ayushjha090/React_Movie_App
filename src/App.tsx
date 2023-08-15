import React, { useState } from 'react';

// Importing Custom Components, Functions and CSS
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/index';
import Favorite from './components/Favorite';
import FavoriteState from './context/FavoriteState';

import './index.css';

const App = (): JSX.Element => {
  const [navigationTile, setNavigationTile] = useState<string>('home');
  return (
    <FavoriteState>
      <div style={{ position: 'relative' }}>
        <Navigation
          activeNavigation={navigationTile}
          changeActiveNavigation={setNavigationTile}
        />
        {navigationTile === 'home' ? <Home /> : <Favorite />}
      </div>
    </FavoriteState>
  );
};

export default App;
