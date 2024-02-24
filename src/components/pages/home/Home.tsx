import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../../utils/api/api';
import {
  BarChart,
  DataTable,
  PieChart,
  TopCard,
  UserDataGrid,
} from '../../shared';

import './home.css';
import UserInfoGrid from '../usersInfo/userInfoGrid/UserInfoGrid';

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
  // states for dataTable
  const [tableData, setTableData] = useState([]);
  const [tablePage, setTablePage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //fetching data from api or sessionStorage
  const getUserData = useCallback(async () => {
    const storedData = sessionStorage.getItem('userData');
    if (storedData !== null) {
      const userData = await JSON.parse(storedData);
      const { data } = userData;
      setTableData(data);
      console.log('sessionStorage', userData);
    } else {
      const userData = await api();
      // setTableData(userData);
      console.log('apiCall', userData);
    }
  }, []);

  //handleChanges for Datatable
  const handleChangePage = (event: unknown, newPage: number) => {
    setTablePage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setTablePage(0);
  };

  //integrating data for dataTable
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

  const rows: Data[] = tableData;
  console.log('rows', rows);

  //piechart
  const pieData = [
    {
      id: 'make',
      label: 'make',
      value: 170,
      color: 'hsl(157, 70%, 50%)',
    },
    {
      id: 'rust',
      label: 'rust',
      value: 196,
      color: 'hsl(220, 70%, 50%)',
    },
    {
      id: 'css',
      label: 'css',
      value: 425,
      color: 'hsl(71, 70%, 50%)',
    },
    {
      id: 'haskell',
      label: 'haskell',
      value: 254,
      color: 'hsl(5, 70%, 50%)',
    },
    {
      id: 'stylus',
      label: 'stylus',
      value: 358,
      color: 'hsl(237, 70%, 50%)',
    },
  ];

  //fetching data from api or sessionStorage
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
          {/* <DataTable
            tablePage={tablePage}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rows={rows}
            columns={columns}
          /> */}
          <UserInfoGrid />
        </div>
        <div className="charts">
          <div className="pie-chart">
            <PieChart pieData={pieData} />
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
          <PieChart pieData={pieData} />
        </div>
        <div className="bottom-charts">
          <PieChart pieData={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
