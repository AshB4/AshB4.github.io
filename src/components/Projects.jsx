// src/components/Projects.jsx
import DmvKiosk from "../assets/DmvKisok.png";
import RedStick from "../assets/RedStick.jpeg";
import TFHA from "../assets/SHCS.png";


const projects = [
  {
    title: 'True Fidelity Healthcare Advisors',
    description: 'React-based platform for insurance comparison with a senior-friendly UX, readable typography, and high-contrast themes.',
    tech: ['React', 'Tailwind', 'API Integration'],
    link: 'https://www.truefidelityhealthcareadvisors.com',
    img: TFHA,
    imgAlt: 'Senior Health Care Logo',
  },
  {
    title: 'DMV Kiosk Redesign',
    description: 'Accessible touchscreen interface for Louisiana DMV terminals, featuring large buttons, clear layouts, and ADA-compliant color contrast.',
    tech: ['Figma', 'UX Design', 'Accessibility'],
    link: 'https://www.figma.com/design/Ha96R0dYgtZmIt0ya22zkn/PrototypeKiosk?node-id=0-1&m=dev&t=ZrXN5VhMuKGLRU4M-1',
    img:  DmvKiosk,
    imgAlt: 'Hi-fi kiosk mockup with large buttons and high contrast, designed for touch interaction',
  },
  {
     title: 'Redstick Waggers',
  description: 'Mobile app using Baton Rouge Open Data to locate BREC dog parks, events, and amenities, built for SQL Saturday Hackathon victory.',
  tech: ['React Native', 'Expo', 'Firebase'],
  link: 'https://github.com/jbrackin1/RedStickWaggers',
  img: RedStick,
  imgAlt: 'Mobile screens from Redstick Waggers park locator and amenities app',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="max-w-screen-lg mx-auto py-16 sm:py-20 px-4 sm:px-6"
    >
      <h2 id="projects-heading" className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10 sm:mb-12 text-darkpurple">
        Featured Projects
      </h2>

      <ul role="list" className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const cardId = `project-${index}`;
          const descId = `${cardId}-desc`;
          const techId = `${cardId}-tech`;
          return (
            <li key={cardId} className="list-none">
              <article
                aria-labelledby={`${cardId}-title`}
                aria-describedby={`${descId} ${techId}`}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg p-6 hover:shadow-xl focus-within:shadow-xl transition duration-300"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-11 -left-8 h-28 w-28 bg-gradient-to-br from-indigo-400/60 to-emerald-300/50 blur-[1px]"
                  style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 bg-gradient-to-br from-emerald-300/50 to-indigo-400/40 blur-[1px]"
                  style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                />
                <div className="relative z-10 space-y-4">
                  {/* Image at the top (508-friendly) */}
                  <figure className="mb-4">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100">
                      <img
                        src={project.img}
                        alt={project.imgAlt}
                        width="640"
                        height="360"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="sr-only">{project.title} preview</figcaption>
                  </figure>

                  <h3 id={`${cardId}-title`} className="text-xl font-serif font-bold mb-2">
                    {project.title}
                  </h3>

                  <p id={descId} className="text-gray-700">
                    {project.description}
                  </p>

                  <ul
                    id={techId}
                    aria-label="Technologies used"
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tech.map((tag, i) => (
                      <li key={i} className="list-none">
                        <span className="text-xs bg-emerald-700 text-white px-2 py-1 rounded-full font-sans">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} (opens in a new tab)`}
                    className="text-emerald-700 underline underline-offset-4 decoration-emerald-700 hover:decoration-2 hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 rounded-sm font-medium text-sm"
                  >
                    View project
                    <span className="sr-only"> (opens in a new tab)</span>
                    <span aria-hidden="true"> →</span>
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
