import React, { useState } from 'react';
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

const VehicleBrandBar = () => {
  const [vehicleBrandZone, setVehicleBrandZone] = useState('Zone_1');

  const handleVehicleBrandZoneChange = (event: SelectChangeEvent) => {
    setVehicleBrandZone(event.target.value as string);
  };
  const barData = [
    {
      country: 'AD',
      'hot dog': 184,
      'hot dogColor': 'hsl(5, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 71,
      'hot dogColor': 'hsl(53, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 32,
      'hot dogColor': 'hsl(50, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 93,
      'hot dogColor': 'hsl(238, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 63,
      'hot dogColor': 'hsl(151, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 77,
      'hot dogColor': 'hsl(72, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 22,
      'hot dogColor': 'hsl(37, 70%, 50%)',
    },
  ];
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
        <BarChart barData={barData} />
      </div>
    </div>
  );
};

export default VehicleBrandBar;
