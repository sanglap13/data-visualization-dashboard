import React from 'react';
import { Home } from './components/pages';

function App() {
  const a = (e: string) => {
    console.log(e);
  };
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
