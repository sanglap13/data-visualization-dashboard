import React, { useEffect, useState } from 'react';
import { BarChart, PieChart } from '../../../shared';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import './vehicleBrandBar.css';
import { VehicleBrandDataItem } from '../../../../@types/pieChart.types';
import { api } from '../../../../utils/api/api';

const VehicleBrandBar = () => {
  const [apiData, setApiData] = useState<VehicleBrandDataItem[]>([]);
  const [vehicleBrandZone, setVehicleBrandZone] = useState('Zone_1');

  const handleVehicleBrandZoneChange = (event: SelectChangeEvent) => {
    setVehicleBrandZone(event.target.value as string);
  };
  //fetching data from api or sessionStorage
  const getSdkIntData = async () => {
    const storedData = sessionStorage.getItem('userData');
    if (storedData !== null) {
      const userData = await JSON.parse(storedData);
      const { data } = userData;
      setApiData(data);
      console.log('sessionStorage', userData);
    } else {
      const userData = await api();
      // setTableData(userData);
      console.log('apiCall', userData);
    }
  };

  const getVehicleBrandDistribution = () => {
    // Filter data based on selected zone
    const filteredData = apiData.filter(
      (item) => item.zone === vehicleBrandZone
    );

    // Aggregate data to count occurrences of each vehicle brand
    const brandDistribution = filteredData.reduce(
      (accumulator, currentItem) => {
        const brand = currentItem.vehicle_brand;
        accumulator[brand] = (accumulator[brand] || 0) + 1;
        return accumulator;
      },
      {} as { [key: string]: number }
    );

    // Transform aggregated data into format suitable for Bar Chart
    const barChartData = Object.entries(brandDistribution).map(
      ([brand, count]) => ({
        brand,
        count,
      })
    );

    return barChartData;
  };

  useEffect(() => {
    getSdkIntData();
  }, []);
  return (
    <div className="vehicle-brand-bar-container">
      <div className="vehicle-brand-bar-header">
        <h2>Device Brand</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={vehicleBrandZone}
              label="Age"
              onChange={handleVehicleBrandZoneChange}
            >
              <MenuItem value={'Zone_1'}>Zone 1</MenuItem>
              <MenuItem value={'Zone_2'}>Zone 2</MenuItem>
              <MenuItem value={'Zone_3'}>Zone 3</MenuItem>
              <MenuItem value={'Zone_4'}>Zone 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="bar-chart-container">
        <BarChart barData={getVehicleBrandDistribution()} />
      </div>
    </div>
  );
};

export default VehicleBrandBar;
