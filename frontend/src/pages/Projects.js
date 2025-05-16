import React, { useEffect, useState } from 'react'

function Projects () {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div>
      <h1>Project History</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <b>{project.name}</b> - {project.description} - {new Date(project.uploadDate).toLocaleString()}
            {' '}
            <a href={`http://localhost:5000${project.reportPath}`} target='_blank' rel='noopener noreferrer'>
              View Report
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
