// src/pages/ScanResults.js
import React, { useEffect, useState } from 'react';
import IssueTable from '../components/IssueTable';

const mockIssues = [
  { file: 'src/App.js', line: 10, rule: 'no-console', severity: 'High', description: 'Unexpected console statement' },
  { file: 'src/index.js', line: 5, rule: 'semi', severity: 'Low', description: 'Missing semicolon' },
];

function ScanResults() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Simulate fetching from backend
    setTimeout(() => setIssues(mockIssues), 500);
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <IssueTable issues={issues} />
    </div>
  );
}

export default ScanResults;
