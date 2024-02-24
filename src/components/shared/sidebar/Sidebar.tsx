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
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { Link } from 'react-router-dom';
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

const Item = ({ title, to, icon, selected, setSelected }: any) => {
  const theme = useTheme();

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: 'gray',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // const theme = useTheme();
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const [selected, setSelected] = useState('');
  return;
};
// <div className="sidebar">
//   <Box
//     sx={{
//       '& .pro-sidebar-inner': {
//         background: '#1F2A40 !important',
//       },
//       '& .pro-icon-wrapper': {
//         backgroundColor: 'transparent !important',
//       },
//       '& .pro-inner-item': {
//         padding: '5px 35px 5px 20px !important',
//       },
//       '& .pro-inner-item:hover': {
//         color: '#868dfb !important',
//       },
//       '& .pro-menu-item.active': {
//         color: '#6870fa !important',
//       },
//     }}
//   >
//     <ProSidebar collapsed={isCollapsed}>
//       <Menu iconShape="square">
//         {/* LOGO AND MENU ICON */}
//         <MenuItem
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//           style={{
//             margin: '10px 0 20px 0',
//             color: '#e0e0e0',
//           }}
//         >
//           {!isCollapsed && (
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               ml="15px"
//             >
//               <Typography variant="h3" color="#e0e0e0">
//                 ADMINIS
//               </Typography>
//               <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                 <MenuOutlinedIcon />
//               </IconButton>
//             </Box>
//           )}
//         </MenuItem>

//         {!isCollapsed && (
//           <Box mb="25px">
//             <Box display="flex" justifyContent="center" alignItems="center">
//               <img
//                 alt="profile-user"
//                 width="100px"
//                 height="100px"
//                 src={`../../assets/user.png`}
//                 style={{ cursor: 'pointer', borderRadius: '50%' }}
//               />
//             </Box>
//             <Box textAlign="center">
//               <Typography
//                 variant="h2"
//                 color="#e0e0e0"
//                 fontWeight="bold"
//                 sx={{ m: '10px 0 0 0' }}
//               >
//                 Ed Roh
//               </Typography>
//               <Typography variant="h5" color="#4cceac">
//                 VP Fancy Admin
//               </Typography>
//             </Box>
//           </Box>
//         )}

//         <Box paddingLeft={isCollapsed ? undefined : '10%'}>
//           <Item
//             title="Dashboard"
//             to="/"
//             icon={<HomeOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />

//           <Typography
//             variant="h6"
//             color="#a3a3a3"
//             sx={{ m: '15px 0 5px 20px' }}
//           >
//             Data
//           </Typography>
//           <Item
//             title="Manage Team"
//             to="/team"
//             icon={<PeopleOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Contacts Information"
//             to="/contacts"
//             icon={<ContactsOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Invoices Balances"
//             to="/invoices"
//             icon={<ReceiptOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />

//           <Typography
//             variant="h6"
//             color="#a3a3a3"
//             sx={{ m: '15px 0 5px 20px' }}
//           >
//             Pages
//           </Typography>
//           <Item
//             title="Profile Form"
//             to="/form"
//             icon={<PersonOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Calendar"
//             to="/calendar"
//             icon={<CalendarTodayOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="FAQ Page"
//             to="/faq"
//             icon={<HelpOutlineOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />

//           <Typography
//             variant="h6"
//             color="#a3a3a3"
//             sx={{ m: '15px 0 5px 20px' }}
//           >
//             Charts
//           </Typography>
//           <Item
//             title="Bar Chart"
//             to="/bar"
//             icon={<BarChartOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Pie Chart"
//             to="/pie"
//             icon={<PieChartOutlineOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Line Chart"
//             to="/line"
//             icon={<TimelineOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Geography Chart"
//             to="/geography"
//             icon={<MapOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//         </Box>
//       </Menu>
//     </ProSidebar>
//   </Box>
// </div>
// <div>
//   <Toolbar />

//   <Box display="flex" justifyContent="space-between" alignItems="center">
//     <Typography variant="h4" color="red">
//       Admin Panel
//     </Typography>
//   </Box>
//   <Box mb="25px">
//     <Box display="flex" justifyContent="center" alignItems="center">
//       <img
//         alt="profile-user"
//         width="100px"
//         height="100px"
//         src={AltorLogo}
//         style={{ cursor: 'pointer', borderRadius: '50%' }}
//       />
//     </Box>
//     <Box textAlign="center">
//       <Typography
//         variant="h5"
//         color="red"
//         fontWeight="bold"
//         sx={{ m: '10px 0 0 0' }}
//       >
//         Sanglap Mridha
//       </Typography>
//       <Typography variant="h5" color="red">
//         SDE FE Intern
//       </Typography>
//     </Box>
//   </Box>
//   <Divider />

//   <List>
//     {SIDEBAR_DETAILS.map((text, index) => {
//       const { label, redirection_link, icon } = text;
//       return (
//         <ListItem key={label} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               {typeof icon === 'function' ? icon() : icon}
//             </ListItemIcon>
//             <ListItemText primary={label} />
//           </ListItemButton>
//         </ListItem>
//       );
//     })}
//   </List>
// </div>

export default Sidebar;
