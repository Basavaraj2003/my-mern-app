// src/pages/Dashboard.js
import React from 'react';
import ScanSummary from '../components/ScanSummary';

const mockSummary = {
  totalScans: 12,
  complianceRate: 85,
  issues: 34,
};

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ScanSummary summary={mockSummary} />
      {/* Add charts or analytics here */}
    </div>
  );
}

export default Dashboard;
