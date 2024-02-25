import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';

import './topCard.css';

const TopCard = ({ bgColor, title, amount }: any) => {
  return (
    <Card className="card" sx={{ backgroundColor: bgColor }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 30, fontWeight: '700' }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {amount}
        </Typography>
      </CardContent>
      <Box>
        <Box sx={{ textAlign: 'right' }}>
          <PeopleIcon />
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: 15, fontWeight: '700', mt: '4rem', color: '#ffff' }}
            color="text.secondary"
            gutterBottom
          >
            View All
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TopCard;
