const API_BASE = 'http://localhost:5000/api';

export async function uploadFiles(files) {
  const formData = new FormData();
  files.forEach(file => formData.append('files', file));
  // TODO: Implement actual API call
  // return fetch(`${API_BASE}/upload`, { method: 'POST', body: formData });
}

export async function submitCode(code) {
  // TODO: Implement actual API call
  // return fetch(`${API_BASE}/submit-code`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ code }),
  // });
}
