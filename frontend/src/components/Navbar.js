import React from 'react'
import logo from '../assets/logo.jpg'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

function Navbar () {
  return (
    <AppBar position='fixed' color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box mr={2}>
          <img src={logo} alt='Logo' style={{ height: 40 }} />
        </Box>
        <Typography variant='h6'>Code Compliance System</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
