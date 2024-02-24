import React, { useState } from 'react';
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

const VehicleCCPie = () => {
  const [vehicleCCZone, setVehicleCCZone] = useState('Zone_1');

  const handleVehicleCCZoneChange = (event: SelectChangeEvent) => {
    setVehicleCCZone(event.target.value as string);
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
  return (
    <div className="vehicle-cc-pie-container">
      <div className="vehicle-cc-pie-header">
        <h2>Device Brand</h2>
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

      <PieChart pieData={pieData} />
    </div>
  );
};

export default VehicleCCPie;
