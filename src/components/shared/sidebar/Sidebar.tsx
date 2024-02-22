import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { AltorLogo } from '../../../assets';
import { SIDEBAR_DETAILS } from '../../../constants/sidebarDetails';

const Sidebar = () => {
  return (
    <div>
      <Toolbar />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="red">
          Admin Panel
        </Typography>
      </Box>
      <Box mb="25px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={AltorLogo}
            style={{ cursor: 'pointer', borderRadius: '50%' }}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h5"
            color="red"
            fontWeight="bold"
            sx={{ m: '10px 0 0 0' }}
          >
            Sanglap Mridha
          </Typography>
          <Typography variant="h5" color="red">
            SDE FE Intern
          </Typography>
        </Box>
      </Box>
      <Divider />

      <List>
        {SIDEBAR_DETAILS.map((text, index) => {
          const { label, redirection_link, icon } = text;
          return (
            <ListItem key={label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {typeof icon === 'function' ? icon() : icon}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Sidebar;
