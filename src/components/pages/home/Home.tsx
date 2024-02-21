import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api/api';

const Home = () => {
  const getUserData = () => {
    const data = api();
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return <div>yo</div>;
};

export default Home;
