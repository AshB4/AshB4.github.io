import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import DecorativeHoneycomb from './DecorativeHoneycomb';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="matte-paper relative overflow-hidden"
    >
      <DecorativeHoneycomb variant="projects" />

      <div className="relative z-10 mx-auto max-w-screen-lg px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          id="projects-heading"
          className="mb-10 font-serif text-3xl font-bold text-darkpurple sm:mb-12 sm:text-4xl"
        >
          Featured Engineering Work
        </SectionHeading>

        <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const cardId = `project-${index}`;
            const isExpanded = openProject === project.slug;

            return (
              <li key={cardId} className="list-none h-full">
                <ProjectCard
                  project={project}
                  isExpanded={isExpanded}
                  onToggleDetails={() => setOpenProject(isExpanded ? null : project.slug)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
