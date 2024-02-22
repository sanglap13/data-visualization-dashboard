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
  const getUserData = async () => {
    const storedData = localStorage.getItem('userData');
    if (storedData !== null) {
      const userData = await JSON.parse(storedData);
      const { data } = userData;
      // setTableData(data);
      console.log('localStorage', userData);
    } else {
      const userData = await api();
      // setTableData(userData);
      console.log('apiCall', userData);
    }
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  //=================================================table
  const [tableData, setTableData] = useState([]);
  const [tablePage, setTablePage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setTablePage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setTablePage(0);
  };
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

  const columns: readonly Column[] = [
    { id: 'username', label: 'Username', minWidth: 170 },
    { id: 'device_brand', label: 'Device Brand', minWidth: 100 },
    { id: 'model', label: 'Device Model', minWidth: 170 },
    { id: 'processor', label: 'Device Processor', minWidth: 170 },
    { id: 'sdk_int', label: 'Device SDK', minWidth: 170 },
    { id: 'vehicle_brand', label: 'Vehicle Brand', minWidth: 170 },
    { id: 'vehicle_cc', label: 'Vehicle CC', minWidth: 170 },
    { id: 'vehicle_type', label: 'Vehicle Type', minWidth: 170 },
    { id: 'zone', label: 'Zone', minWidth: 170 },
  ];

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

  const rows: Data[] = tableData;
  console.log('rows', rows);

  //=================================piechart
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
          <DataTable
            tablePage={tablePage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rows={rows}
            columns={columns}
          />
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
      <div className="bottom-container">
        <div className="bottom-charts">
          <BarChart />
        </div>
        <div className="bottom-charts">
          <PieChart />
        </div>
        <div className="bottom-charts">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
