import React from 'react';
import logo from '../assets/logo.jpg';
 // Only one import!
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box mr={2}>
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </Box>
        <Typography variant="h6">Code Compliance System</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
