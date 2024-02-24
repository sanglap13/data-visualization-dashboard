import React, { useCallback, useEffect } from 'react';
import { Home, UserInfo } from './components/pages';
import { MainContainer, Navbar, Sidebar } from './components/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './utils/api/api';
import { CssBaseline } from '@mui/material';

const App = () => {
  const getApiData = useCallback(async () => {
    const userData = await api();
    sessionStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <div
      className="App"
      // style={{ display: 'flex' }}
    >
      <BrowserRouter>
        {/* <Sidebar /> */}
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserInfo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
