import React, { useCallback, useEffect, useState } from 'react';
import { BarChart } from '../../../shared';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import './sdkIntBar.css';
import { api } from '../../../../utils/api/api';
import { SdkIntDataItem } from '../../../../@types/barChart.types';

const SdkIntBar = () => {
  const [apiData, setApiData] = useState<SdkIntDataItem[]>([]);
  const [sdkIntZone, setSdkIntZone] = useState('Zone_1');

  const handleSdkIntZoneChange = (event: SelectChangeEvent) => {
    setSdkIntZone(event.target.value as string);
  };

  //fetching data from api or sessionStorage
  const getSdkIntData = useCallback(async () => {
    const storedData = sessionStorage.getItem('userData');
    let userData;

    if (storedData !== null) {
      userData = await JSON.parse(storedData);
    } else {
      userData = await api();
    }

    if (userData && userData.data) {
      const { data } = userData;
      setApiData(data);
      console.log('userData:', userData);
    } else {
      console.error('userData is undefined or does not contain data');
    }
  }, []);

  const getSdkIntDistribution = () => {
    // Filter data based on selected zone
    const filteredData = apiData.filter((item) => item.zone === sdkIntZone);

    // Aggregate data to count occurrences of each vehicle brand
    const brandDistribution = filteredData.reduce(
      (accumulator, currentItem) => {
        const brand = `SDK ${currentItem.sdk_int}`;
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
    <div className="sdk-int-bar-container">
      <div className="sdk-int-bar-header">
        <h2>SDK Int Distribution</h2>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sdkIntZone}
              label="Age"
              onChange={handleSdkIntZoneChange}
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
        <BarChart barData={getSdkIntDistribution()} />
      </div>
    </div>
  );
};

export default SdkIntBar;
