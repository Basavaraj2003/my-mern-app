import React from 'react'
import { Box, TextField, Button } from '@mui/material'

function CodeInput ({ code, setCode, onSubmit }) {
  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label='Paste your code'
        multiline
        rows={8}
        fullWidth
        value={code}
        onChange={(e) => setCode(e.target.value)}
        variant='outlined'
      />
      <Button
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}
        onClick={onSubmit}
      >
        Submit Code
      </Button>
    </Box>
  )
}

export default CodeInput
