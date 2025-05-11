import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FileUpload from './pages/FileUpload';
import ScanResults from './pages/ScanResults';
import RuleSettings from './pages/RuleSettings';
import ProjectList from './pages/ProjectList';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/results" element={<ScanResults />} />
            <Route path="/rules" element={<RuleSettings />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
