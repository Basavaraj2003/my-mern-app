// src/styles/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#4299e1' },
    error: { main: '#e53e3e' },
    background: { default: '#f7fafc' }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
})

export default theme
