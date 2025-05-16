import React, { useEffect, useState } from 'react';

function Results() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <strong>{project.name}</strong> - {project.description}
            <br />
            <a
              href={`http://localhost:5000${project.reportPath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View MegaLinter Report
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
