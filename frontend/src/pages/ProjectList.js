// src/pages/ProjectList.js
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const initialProjects = [
  { name: 'Frontend', description: 'React UI for compliance system' },
  { name: 'Backend', description: 'Express API for code scanning' },
];

function ProjectList() {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState('');

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([...projects, { name: newProject, description: 'New project' }]);
      setNewProject('');
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <input
        type="text"
        value={newProject}
        onChange={e => setNewProject(e.target.value)}
        placeholder="Add new project"
      />
      <button onClick={addProject}>Add</button>
      <div style={{ display: 'flex' }}>
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </div>
  );
}

export default ProjectList;
