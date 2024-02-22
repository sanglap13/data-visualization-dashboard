import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { SIDEBAR_DETAILS } from '../../../constants/sidebarDetails';
import { AltorLogo } from '../../../assets';
import Navbar from '../navbar/Navbar';

const drawerWidth = 240;

const MainContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
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
      {/* <Divider /> */}
    </div>
  );
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          {/* <Navbar /> */}
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          saddddddddddddddddddddddddddddddd
        </Box>
      </Box>
    </div>
  );
};

export default MainContainer;
