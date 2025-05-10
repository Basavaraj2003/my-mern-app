import React from 'react';

function Results() {
  return (
    <div>
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Line</th>
            <th>Rule</th>
            <th>Severity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>no-console</td>
            <td>High</td>
            <td>Unexpected console statement</td>
          </tr>
          <tr>
            <td>15</td>
            <td>semi</td>
            <td>Low</td>
            <td>Missing semicolon</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Results;