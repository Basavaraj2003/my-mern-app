// src/components/IssueTable.js
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

function IssueTable ({ issues }) {
  const getColor = severity => {
    if (severity === 'High') return '#e53e3e'
    if (severity === 'Medium') return '#ecc94b'
    if (severity === 'Low') return '#38a169'
    return '#000'
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell>Line</TableCell>
            <TableCell>Rule</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.map((issue, idx) => (
            <TableRow key={idx}>
              <TableCell>{issue.file}</TableCell>
              <TableCell>{issue.line}</TableCell>
              <TableCell>{issue.rule}</TableCell>
              <TableCell style={{ color: getColor(issue.severity) }}>
                {issue.severity}
              </TableCell>
              <TableCell>{issue.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default IssueTable
