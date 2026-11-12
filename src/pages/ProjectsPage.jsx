import BackToTop from '../components/BackToTop';
import DecorativeHoneycomb from '../components/DecorativeHoneycomb';
import Footer from '../components/Footer';
import ProjectGrid from '../components/ProjectGrid';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';

function ProjectsPage() {
  const allProjects = projects
    .filter((project) => project.showInAllProjects !== false)
    .sort((a, b) => Number(a.slug === 'dealership-toolkit') - Number(b.slug === 'dealership-toolkit'));

  return (
    <main className="min-h-screen bg-cream font-sans text-main">
      <section className="matte-paper relative isolate overflow-hidden">
        <DecorativeHoneycomb variant="projects" />
        <div className="relative z-10 mx-auto max-w-screen-lg px-4 py-14 sm:px-6 sm:py-20">
          <a
            href="/"
            className="inline-flex rounded-sm text-sm font-semibold text-lavender underline decoration-lavender/70 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender"
          >
            ← Back to portfolio
          </a>

          <SectionHeading
            as="h1"
            id="all-projects-heading"
            className="mt-8 font-serif text-3xl font-bold text-darkpurple sm:text-4xl"
          >
            All Projects
          </SectionHeading>

          <div className="mt-10">
            <ProjectGrid projects={allProjects} />
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

export default ProjectsPage;
