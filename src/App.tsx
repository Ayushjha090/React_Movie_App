import React, { useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import './index.css';

const App = (): JSX.Element => {
  const [navigationTile, setNavigationTile] = useState<string>('home');

  return (
    <div>
      <Navigation
        activeNavigation={navigationTile}
        changeActiveNavigation={setNavigationTile}
      />
    </div>
  );
};

export default App;
