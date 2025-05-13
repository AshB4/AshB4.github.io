// src/components/Projects.jsx
const projects = [
  {
    title: 'Senior Healthcare App',
    description: 'React-based platform for insurance comparison with UX for older users.',
    tech: ['React', 'Tailwind', 'API Integration'],
    link: 'https://seniorhealthcaresolution.net',
  },
  {
    title: 'GitHub Green Square Ritual',
    description: 'Daily commit automation tool for streak maintenance and stealth dev vibes.',
    tech: ['Shell', 'Automation', 'GitHub'],
    link: 'https://fleurdevie.gumroad.com/l/github-streak-shell-script',
  },
  {
    title: 'DMV Kiosk Redesign',
    description: 'Accessible touchscreen interface for Louisiana DMV terminals.',
    tech: ['Figma', 'UX Design', 'Accessibility'],
    link: 'https://www.figma.com/design/Ha96R0dYgtZmIt0ya22zkn/PrototypeKiosk?node-id=0-1&m=dev&t=ZrXN5VhMuKGLRU4M-1',
  },
  {
  title: 'Redstick Waggers',
  description: 'React Native app built for a pet service startup, including real-time scheduling and playful UI.',
  tech: ['React Native', 'Expo', 'Tailwind'],
  link: 'https://github.com/jbrackin1/RedStickWaggers',
}
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-lg mx-auto py-20 px-6">
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-darkpurple">Featured Projects</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-emerald-500 text-white px-2 py-1 rounded-full font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-emerald-600 hover:underline font-semibold text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
