import React from 'react';
import { Home } from './components/pages';
import { MainContainer, Navbar } from './components/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
