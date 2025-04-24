import React from 'react';
import PetManager from './components/PetManager';

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to My Pet Store!</h1>
      <PetManager />
    </div>
  );
};

export default App;
