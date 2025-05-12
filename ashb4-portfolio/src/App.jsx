import './index.css';

const projects = [
  {
    title: 'PromptStorm',
    description: 'An AI-powered prompt system built for creators and founders using GPT-4.',
    tech: ['React', 'GPT-4', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Terminal Tools Pack',
    description: 'A collection of command-line tools to automate dev rituals and daily tasks.',
    tech: ['Shell', 'Automation', 'Git'],
    link: '#',
  },
  {
    title: 'DMV Kiosk Redesign',
    description: 'Accessible touchscreen interface for Louisiana DMV terminals.',
    tech: ['React', 'Tailwind', 'UX'],
    link: '#',
  },
];

function App() {
  return (
    <main className="bg-cream min-h-screen text-gray-900 font-sans">
      <section className="max-w-screen-lg mx-auto py-20 px-6">
        <h1 className="text-5xl font-serif font-bold text-center mb-12">Featured Projects</h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-serif font-bold mb-2">{project.title}</h2>
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
                className="text-purple-600 hover:underline font-semibold text-sm"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
