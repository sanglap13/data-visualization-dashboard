import React, { useEffect, useState } from 'react';
import { PieChart } from '../../../shared';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import './deviceBrandPie.css';
import { api } from '../../../../utils/api/api';

interface DataItem {
  device_brand: string;
  zone: string;
}

const DeviceBrandPie = () => {
  //for apiCall
  const [apiData, setApidata] = useState<DataItem[]>([]);
  const [deviceBrandZone, setDeviceBrandZone] = useState<string>('Zone_1');

  const handleDeviceBrandZoneChange = (event: SelectChangeEvent) => {
    setDeviceBrandZone(event.target.value as string);
  };
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
  const getDeviceData = async () => {
    const storedData = sessionStorage.getItem('userData');
    if (storedData !== null) {
      const userData = await JSON.parse(storedData);
      const { data } = userData;
      setApidata(data);
      console.log('sessionStorage', userData);
    } else {
      const userData = await api();
      // setTableData(userData);
      console.log('apiCall', userData);
    }
  };

  //for deviceBrand Distribution
  const getDeviceBrandDistribution = () => {
    // for filtering data based on zone
    const filteredData = apiData.filter(
      (item) => item.zone === deviceBrandZone
    );

    // for Aggregating data to count occurrences of each device brand
    const brandDistribution = filteredData.reduce(
      (accumulator, currentItem) => {
        const brand = currentItem.device_brand;
        accumulator[brand] = (accumulator[brand] || 0) + 1;
        return accumulator;
      },
      {} as { [key: string]: number }
    );

    // for Transforming data into format suitable for Nivo Pie Chart
    const pieChartData = Object.entries(brandDistribution).map(
      ([brand, count]) => ({
        id: brand,
        label: brand,
        value: count,
      })
    );
    return pieChartData;
  };

  //fetching data from api or sessionStorage
  useEffect(() => {
    getDeviceData();
  }, []);
  return (
    <div className="device-brand-pie-container">
      <div className="device-brand-pie-header">
        <h2>Device Brand</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={deviceBrandZone}
              label="Age"
              onChange={handleDeviceBrandZoneChange}
            >
              <MenuItem value={'Zone_1'}>Zone 1</MenuItem>
              <MenuItem value={'Zone_2'}>Zone 2</MenuItem>
              <MenuItem value={'Zone_3'}>Zone 3</MenuItem>
              <MenuItem value={'Zone_4'}>Zone 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <PieChart pieData={getDeviceBrandDistribution()} />
    </div>
  );
};

export default DeviceBrandPie;
