import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Header from '../Header';
import Link from '@mui/material/Link';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
//import Layout from '../../layout/Layout';
import DashboardIcon from '@mui/icons-material/Dashboard';
//import AdminBoard from '../../containers/Dashboard/AdminBoard';

const drawerWidth = 240;

function LeftDrawer() {
  const routes = [
    "/product",
    "/delivery",
    "/analysis",
    "/credit-notes",
    "/order-management",
    "/stock-management",
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Header />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <div style={{marginTop:'75px'}}> 
            <Toolbar>
            <DashboardIcon style={{color:"#145DA0",padding:'2px',marginBottom:'6px'}} />
                <Typography variant="h6" noWrap component="div" gutterBottom>
                    Admin Dashboard
                </Typography>
            </Toolbar>
        </div>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
            <div style={{paddingLeft:'10px'}}>
                <span>Overview</span>
            </div>
          <List>
            {['Product', 'Deliveries', 'Analysis', 'Credit Notes', 'Order Managment','Stock Management'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index == 0 ? <PostAddIcon /> : ''}
                    {index == 1 ? <LocalShippingIcon /> : ''}
                    {index == 2 ? <EqualizerIcon /> : ''}
                    {index == 3 ? <ReceiptIcon /> : ''}
                    {index == 4 ? <EditNoteIcon /> : ''}
                    {index == 5 ? <DescriptionIcon /> : ''}
                  </ListItemIcon>
                  <Link href={routes[index]} underline="none"><ListItemText primary={text} /></Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
            <div style={{paddingLeft:'10px'}}>
                    <span>Account Management</span>
            </div>
          <List>
            {['Profile', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index == 0 ? <PersonIcon /> : ''}
                    {index == 1 ? <SettingsIcon /> : ''}
                  </ListItemIcon>
                  <Link href="#" underline="none"><ListItemText primary={text} /></Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default LeftDrawer