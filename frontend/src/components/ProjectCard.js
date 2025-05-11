import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ProjectCard({ project }) {
  return (
    <Card sx={{ minWidth: 200, m: 1 }}>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
