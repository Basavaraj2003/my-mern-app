import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function ScanSummary({ summary }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h5">{summary.totalScans}</Typography>
          <Typography variant="subtitle2">Total Scans</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h5">{summary.complianceRate}%</Typography>
          <Typography variant="subtitle2">Compliance Rate</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h5">{summary.issues}</Typography>
          <Typography variant="subtitle2">Total Issues</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ScanSummary;
