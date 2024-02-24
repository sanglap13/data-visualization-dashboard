import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css';
import { SIDEBAR_DETAILS } from '../../../constants/sidebarDetails';
import { AltorLogo } from '../../../assets';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = <Sidebar toggleDrawer={toggleDrawer} />;

  return (
    <div className="navbar">
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        sx={{
          // background: rgb(2, 194, 204),
          background:
            'linear-gradient(90deg, rgba(2,194,204,1) 0%, rgba(62,121,218,1) 45%, rgba(125,43,232,1) 100%)',
        }}
      >
        <Button className="glow-on-hover" onClick={toggleDrawer(true)}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        {/* ICONS */}
        <Box display="flex">
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
