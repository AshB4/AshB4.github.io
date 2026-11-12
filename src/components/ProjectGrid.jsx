import { useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectGrid({ projects }) {
  const [openProject, setOpenProject] = useState(null);

  return (
    <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const isExpanded = openProject === project.slug;

        return (
          <li key={project.slug} className="list-none h-full">
            <ProjectCard
              project={project}
              isExpanded={isExpanded}
              onToggleDetails={() => setOpenProject(isExpanded ? null : project.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectGrid;
