import React, { useState } from 'react';

// Importing Custom Components, Functions and CSS
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/index';
import Favorite from './components/Favorite';
import './index.css';

const App = (): JSX.Element => {
  const [navigationTile, setNavigationTile] = useState<string>('home');
  return (
    <div style={{ position: 'relative' }}>
      <Navigation
        activeNavigation={navigationTile}
        changeActiveNavigation={setNavigationTile}
      />
      {navigationTile === 'home' ? <Home /> : <Favorite />}
    </div>
  );
};

export default App;
