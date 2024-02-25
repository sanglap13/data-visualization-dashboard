import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import './vehicleSdkStackedBar.css';
import { api } from '../../../../utils/api/api';
import { StackedBarChart } from '../../../shared';
interface VehicleDataItem {
  vehicle_cc: string;
  sdk_int: number;
  zone: string;
}
interface StackedBarChartData {
  zone: string;
  vehicleCCCount: number;
  sdkIntCount: number;
}

const VehicleSdkStackedBar = () => {
  //for apiCall
  const [apiData, setApidata] = useState<VehicleDataItem[]>([]);
  //for selecting zone
  const [selectedZone, setSelectedZone] = useState<string>('Zone_1');

  //for changing zone
  const handleVehicleCCZoneChange = (event: SelectChangeEvent) => {
    setSelectedZone(event.target.value as string);
  };

  //fetching data from api or sessionStorage
  const getVehicleCCData = async () => {
    const storedData = sessionStorage.getItem('userData');
    let userData;

    if (storedData !== null) {
      userData = await JSON.parse(storedData);
    } else {
      userData = await api();
    }

    if (userData && userData.data) {
      const { data } = userData;
      setApidata(data);
      console.log('userData:', userData);
    } else {
      console.error('userData is undefined or does not contain data');
    }
  };

  const filterDataByZone = () => {
    return apiData.filter((item) => item.zone === selectedZone);
  };

  const aggregateDataByZone = (filteredData: VehicleDataItem[]) => {
    const aggregatedData: {
      [key: string]: { vehicleCCCount: number; sdkIntCount: number };
    } = {};
    filteredData.forEach((item) => {
      const { vehicle_cc, sdk_int } = item;
      aggregatedData[item.zone] = aggregatedData[item.zone] || {
        vehicleCCCount: 0,
        sdkIntCount: 0,
      };
      aggregatedData[item.zone].vehicleCCCount += 1;
      aggregatedData[item.zone].sdkIntCount += 1;
    });
    return aggregatedData;
  };

  const prepareChartData = () => {
    const filteredData = filterDataByZone();
    const aggregatedData = aggregateDataByZone(filteredData);

    // Convert aggregated data to an array of objects for StackedBarChart component
    const chartData: StackedBarChartData[] = [];
    Object.keys(aggregatedData).forEach((zone) => {
      chartData.push({
        zone,
        vehicleCCCount: aggregatedData[zone].vehicleCCCount,
        sdkIntCount: aggregatedData[zone].sdkIntCount,
      });
    });
    return chartData;
  };

  useEffect(() => {
    getVehicleCCData();
  }, []);
  return (
    <div className="bar-container">
      <div className="bar-header">
        <h2>Vehicle & SDK Distribution</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedZone}
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
      <div className="bar-chart-container">
        <StackedBarChart data={prepareChartData()} />
      </div>
    </div>
  );
};

export default VehicleSdkStackedBar;
