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

  const filterDataByZone = () => {
    return apiData.filter((item) => item.zone === selectedZone);
  };

  const aggregateVehicleCCData = (filteredData: VehicleDataItem[]) => {
    // Aggregate data to calculate total number of vehicles for each vehicle CC value, grouped by zone
    const aggregatedData = filteredData.reduce(
      (accumulator, currentItem) => {
        const { vehicle_cc, zone } = currentItem;
        accumulator[vehicle_cc] = (accumulator[vehicle_cc] || 0) + 1;
        return accumulator;
      },
      {} as { [key: string]: number }
    );

    return aggregatedData;
  };

  const aggregateSDKIntData = (filteredData: VehicleDataItem[]) => {
    // Aggregate data to calculate total number of vehicles for each SDK int value, grouped by zone
    const aggregatedData = filteredData.reduce(
      (accumulator, currentItem) => {
        const { sdk_int, zone } = currentItem;
        accumulator[sdk_int.toString()] =
          (accumulator[sdk_int.toString()] || 0) + 1;
        return accumulator;
      },
      {} as { [key: string]: number }
    );

    return aggregatedData;
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
        <StackedBarChart
          vehicleCCData={aggregateVehicleCCData(filterDataByZone())}
          sdkIntData={aggregateSDKIntData(filterDataByZone())}
        />
      </div>
    </div>
  );
};

export default VehicleSdkStackedBar;
