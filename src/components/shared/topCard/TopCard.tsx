import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

import './topCard.css';

const TopCard = ({ bgColor }: any) => {
  return (
    <Card className="card" sx={{ backgroundColor: bgColor }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          yo
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TopCard;
