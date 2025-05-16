import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Typography } from '@mui/material'

function FileDropzone ({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #1976d2',
        borderRadius: 2,
        padding: 4,
        textAlign: 'center',
        background: isDragActive ? '#e3f2fd' : '#fafafa',
        cursor: 'pointer'
      }}
    >
      <input {...getInputProps()} />
      <Typography variant='h6'>
        {isDragActive ? 'Drop the files here...' : 'Drag & drop code files here, or click to select files'}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        Supported: .js, .py, .java, .c, .cpp, .json
      </Typography>
    </Box>
  )
}

export default FileDropzone
