import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import './App.css';
import HeadlightAiming, { HeadlightAimingListItem } from './applications/headlight-aiming';
import TimeJogger, { TimeJoggerListItem } from './applications/time-jogger';
import TyreSize, { TyreSizeListItem } from './applications/tyre-size-calculator';

function App() {
  const [selectedApplication, changeSelectedApplication] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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
  const drawerWidth = 240;

  const applicationToShow = () => {
    switch (selectedApplication) {
      case 1: return <TimeJogger />
      case 2: return <HeadlightAiming />
      case 3: return <TyreSize />
      default: return <Typography>👈 Select a tool from the menu.</Typography>
    }
  }

  var onListItemClick = id => {
    changeSelectedApplication(id);
    handleDrawerClose();
  }

  var drawerComponents =
    <>
      <Toolbar />
      <Divider />
      <List>
        <TimeJoggerListItem
          onClick={onListItemClick}
          selected={selectedApplication} />
        <HeadlightAimingListItem
          onClick={onListItemClick}
          selected={selectedApplication} />
        <TyreSizeListItem
          onClick={onListItemClick}
          selected={selectedApplication} />
      </List>
    </>;

  return (
    <Box sx={{ display: 'block', height: 412, width: 870 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          ml:  { xs: 0, sm: `${drawerWidth}px` }
        }}
      >
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
            🚗 Car Tools 🚗
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
      >
        {drawerComponents}
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        open
        variant="permanent"
        anchor="left"
      >
        {drawerComponents}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {applicationToShow()}
      </Box>
    </Box>
  );
}

export const ToolListItem = ({ onClick, selected, text, children }) =>
  <ListItem key={text} disablePadding>
    <ListItemButton onClick={onClick} selected={selected}>
      <ListItemIcon>
        {children}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>

export default App;
