import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../../utils/api/api';
import {
  BarChart,
  DataTable,
  PieChart,
  StackedBarChart,
  TopCard,
  UserDataGrid,
} from '../../shared';

import './home.css';
import UserInfoGrid from '../usersInfo/userInfoGrid/UserInfoGrid';
import DeviceBrandPie from './deviceBrandPie/DeviceBrandPie';
import VehicleBrandPie from './vehicleBrandPie/VehicleBrandPie';
import VehicleBrandBar from './vehicleBrandBar/VehicleBrandBar';
import SdkIntBar from './sdkIntBar/SdkIntBar';
import VehicleCCPie from './vehicleCCPie/VehicleCCPie';
import VehicleSdkStackedBar from './vehicleSdkStackedBar/VehicleSdkStackedBar';

interface Column {
  id:
    | 'device_brand'
    | 'model'
    | 'processor'
    | 'sdk_int'
    | 'username'
    | 'vehicle_brand'
    | 'vehicle_cc'
    | 'vehicle_type'
    | 'zone';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
interface Data {
  device_brand: string;
  model: string;
  processor: string;
  sdk_int: number;
  username: string;
  vehicle_brand: string;
  vehicle_cc: string;
  vehicle_type: string;
  zone: string;
}

const Home = () => {
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
          <UserInfoGrid />
        </div>
        <div className="charts">
          <div className="pie-chart">
            <DeviceBrandPie />
          </div>
          <div className="bar-chart">
            <VehicleBrandBar />
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-charts">
          <SdkIntBar />
        </div>
        <div className="bottom-charts">
          <VehicleBrandPie />
        </div>
        <div className="bottom-charts">
          <VehicleCCPie />
        </div>
      </div>
      {/* <div className="stacked-bar-chart-container">
        <VehicleSdkStackedBar />
      </div> */}
    </div>
  );
};

export default Home;
