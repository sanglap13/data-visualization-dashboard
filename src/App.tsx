import React from 'react';
import { Home } from './components/pages';
import { MainContainer, Navbar, Sidebar } from './components/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
