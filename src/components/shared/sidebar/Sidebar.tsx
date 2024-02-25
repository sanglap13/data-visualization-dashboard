import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { AltorLogo } from '../../../assets';
import { SIDEBAR_DETAILS } from '../../../constants/sidebarDetails';

import { Link, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar: React.FC<any> = ({ toggleDrawer }) => {
  const navigate = useNavigate();
  // const theme = useTheme();
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const [selected, setSelected] = useState('');
  return (
    <Box
      sx={{
        width: 250,
        height: '100%',
        // backgroundColor: '#2D53DA'
        backgroundColor: '#215fab',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Toolbar />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="#ffffff" ml="27%" mb="1rem">
          ADMIN
        </Typography>
      </Box>
      <Box mb="100px">
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
            color="#ffffff"
            fontWeight="bold"
            sx={{ m: '10px 0 0 0' }}
          >
            Sanglap Mridha
          </Typography>
          <Typography variant="h5" color="#c2c2bd">
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
              <ListItemButton onClick={() => navigate(redirection_link)}>
                <ListItemIcon sx={{ color: '#c2c2bd' }}>
                  {typeof icon === 'function' ? icon() : icon}
                </ListItemIcon>
                <ListItemText sx={{ color: '#c2c2bd' }} primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />

      {/* <Typography
        variant="h4"
        color="#ffffff"
        ml="25%"
        mb="40.5%"
        mt="106%"
        overflow="hidden"
      >
        ADMIN
      </Typography> */}
    </Box>
  );
};

export default Sidebar;
