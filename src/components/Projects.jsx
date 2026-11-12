import { projects } from '../data/projects';
import DecorativeHoneycomb from './DecorativeHoneycomb';
import SectionHeading from './SectionHeading';
import ProjectGrid from './ProjectGrid';

const Projects = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);

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

        <ProjectGrid projects={featuredProjects} />

        <div className="mt-10 text-center">
          <a
            href="/projects/"
            className="inline-flex items-center justify-center rounded-md border-2 border-indigo-500 px-6 py-3 font-semibold text-lavender transition hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
