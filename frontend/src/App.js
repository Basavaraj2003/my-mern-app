import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Results from './pages/Results'
import Rules from './pages/Rules'
import Projects from './pages/Projects'
import { Box } from '@mui/material'

function App () {
  return (
    <Router>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component='main' sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/results' element={<Results />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
