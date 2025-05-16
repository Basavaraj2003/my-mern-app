import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import AssessmentIcon from '@mui/icons-material/Assessment'
import RuleIcon from '@mui/icons-material/Rule'
import FolderIcon from '@mui/icons-material/Folder'
import { useNavigate } from 'react-router-dom'

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Upload', icon: <CloudUploadIcon />, path: '/upload' },
  { text: 'Results', icon: <AssessmentIcon />, path: '/results' },
  { text: 'Rules', icon: <RuleIcon />, path: '/rules' },
  { text: 'Projects', icon: <FolderIcon />, path: '/projects' }
]

function Sidebar () {
  const navigate = useNavigate()

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' }
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
