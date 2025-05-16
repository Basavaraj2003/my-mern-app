import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!file) {
      setError('Please select a file');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:5000/api/projects/upload', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSuccess('Upload successful!');
        setTimeout(() => navigate('/results'), 1000);
      } else {
        setError('Upload failed!');
      }
    } catch (err) {
      setError('Upload failed!');
    }
  };

  return (
    <div>
      <h2>Upload Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        /><br />
        <input
          type="file"
          onChange={e => setFile(e.target.files[0])}
          required
        /><br />
        <button type="submit">Upload</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </div>
  );
}

export default Upload;
