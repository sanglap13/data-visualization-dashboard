import React, { useEffect, useState } from 'react';
import { api } from '../../../utils/api/api';
import { MainContainer } from '../../shared';

const Home = () => {
  const getUserData = () => {
    const data = api();
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Home;
