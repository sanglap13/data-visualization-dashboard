import React, { useCallback, useEffect } from 'react';
import { Home, UserInfo } from './components/pages';
import { Navbar } from './components/shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './utils/api/api';

const App = () => {
  //storing apiResponse in SessionStorage
  const getApiData = useCallback(async () => {
    const userData = await api();
    sessionStorage.setItem('userData', JSON.stringify(userData));
    console.log(userData);
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <div className="App">
      <BrowserRouter>
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
