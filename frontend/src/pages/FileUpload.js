// src/pages/FileUpload.js
import React, { useState } from 'react';
import FileDropzone from '../components/FileDropzone';
import CodeInput from '../components/CodeInput';

function FileUpload() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock upload handler
  const handleFileDrop = async (files) => {
    setLoading(true);
    // Simulate sending files to backend
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/results'; // Redirect to results
    }, 1500);
  };

  const handleCodeSubmit = async () => {
    setLoading(true);
    // Simulate sending code to backend
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/results'; // Redirect to results
    }, 1500);
  };

  return (
    <div>
      <h2>Upload Code</h2>
      <FileDropzone onDrop={handleFileDrop} />
      <CodeInput code={code} setCode={setCode} onSubmit={handleCodeSubmit} />
      {loading && <p>Scanning code for compliance...</p>}
    </div>
  );
}

export default FileUpload;
