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

import './vehicleCCPie.css';
import { VehicleCCDataItem } from '../../../../@types/pieChart.types';
import { api } from '../../../../utils/api/api';

const VehicleCCPie = () => {
  //for apiCall
  const [apiData, setApidata] = useState<VehicleCCDataItem[]>([]);
  //for selecting zone
  const [vehicleCCZone, setVehicleCCZone] = useState('Zone_1');

  //for changing zone
  const handleVehicleCCZoneChange = (event: SelectChangeEvent) => {
    setVehicleCCZone(event.target.value as string);
  };

  //fetching data from api or sessionStorage
  const getVehicleCCData = async () => {
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
  const getVehicleCCDistribution = () => {
    // for filtering data based on zone
    const filteredData = apiData.filter((item) => item.zone === vehicleCCZone);

    // for Aggregating data to count occurrences of each device brand
    const brandDistribution = filteredData.reduce(
      (accumulator, currentItem) => {
        const brand = currentItem.vehicle_cc;
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

  useEffect(() => {
    getVehicleCCData();
  }, []);
  return (
    <div className="vehicle-cc-pie-container">
      <div className="vehicle-cc-pie-header">
        <h2>Vehicle CC Distribution</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={vehicleCCZone}
              label="Age"
              onChange={handleVehicleCCZoneChange}
            >
              <MenuItem value={'Zone_1'}>Zone 1</MenuItem>
              <MenuItem value={'Zone_2'}>Zone 2</MenuItem>
              <MenuItem value={'Zone_3'}>Zone 3</MenuItem>
              <MenuItem value={'Zone_4'}>Zone 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <PieChart pieData={getVehicleCCDistribution()} />
    </div>
  );
};

export default VehicleCCPie;
