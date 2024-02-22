import React, { useEffect } from 'react';
import { Home } from './components/pages';
import { MainContainer, Navbar, Sidebar } from './components/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './utils/api/api';

const App = () => {
  const getUserData = async () => {
    const userData = await api();
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

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
