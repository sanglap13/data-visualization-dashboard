import React, { useEffect, useState } from 'react';
import { api } from '../../../utils/api/api';
import {
  BarChart,
  DataTable,
  MainContainer,
  PieChart,
  TopCard,
} from '../../shared';

import './home.css';

const Home = () => {
  const getUserData = () => {
    const data = api();
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div className="home">
      <div className="cards-container">
        <TopCard />
        <TopCard />
        <TopCard />
      </div>
      <div className="middle-container">
        <div className="data-table">
          <div className="data-table-header">
            <h1 className="title">User Data</h1>
          </div>
          <DataTable />
        </div>
        <div className="charts">
          <div className="pie-chart">
            <PieChart />
          </div>
          <div className="bar-chart">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
