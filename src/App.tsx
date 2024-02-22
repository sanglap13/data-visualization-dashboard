import React, { useCallback, useEffect } from 'react';
import { Home } from './components/pages';
import { MainContainer, Navbar, Sidebar } from './components/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './utils/api/api';
import { CssBaseline } from '@mui/material';

const App = () => {
  const getApiData = useCallback(async () => {
    const userData = await api();
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Sidebar />
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
