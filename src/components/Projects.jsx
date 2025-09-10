// src/components/Projects.jsx
import DmvKiosk from "../assets/DmvKisok.png";
import RedStick from "../assets/RedStick.jpeg";


const projects = [
  {
    title: 'Senior Healthcare App',
    description: 'Built in React/Node.js. Normalized a messy 70-field API into a clean, senior-friendly plan comparison tool with high-contrast design, readable typography, and simple filters for accessibility.',
    tech: ['React', 'Tailwind', 'API Integration'],
    link: 'https://seniorhealthcaresolution.net',
    img: 'https://seniorhealthcaresolution.net/static/media/DarkLogoSHS.74ceaea6a9e49d502fe0.webp',
    imgAlt: 'Senior Health Care Logo',
  },
  {
    title: 'DMV Kiosk Redesign',
    description: 'At Envoc, rebuilt a Louisiana DMV touchscreen kiosk UI in just 8 hours before a demo. Delivered ADA-compliant large buttons, clear layouts, and high-contrast flows that state officials praised during testing.',
    tech: ['Figma', 'UX Design', 'Accessibility'],
    link: 'https://www.figma.com/design/Ha96R0dYgtZmIt0ya22zkn/PrototypeKiosk?node-id=0-1&m=dev&t=ZrXN5VhMuKGLRU4M-1',
    img:  DmvKiosk,
    imgAlt: 'Hi-fi kiosk mockup with large buttons and high contrast, designed for touch interaction',
  },
  {
     title: 'Redstick Waggers',
  description: 'Hackathon-winning React Native app that mapped Baton Rouge dog parks and amenities using Open Data BR. Built in two days with Firebase backend, Expo integration, and delivered a smooth live demo.',
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
      className="max-w-screen-lg mx-auto py-20 px-6"
    >
      <h2 id="projects-heading" className="text-4xl font-serif font-bold text-center mb-12 text-darkpurple">
        Featured Projects
      </h2>

      <ul role="list" className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const cardId = `project-${index}`;
          const descId = `${cardId}-desc`;
          const techId = `${cardId}-tech`;
          return (
            <li key={cardId} className="list-none">
              <article
                aria-labelledby={`${cardId}-title`}
                aria-describedby={`${descId} ${techId}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl focus-within:shadow-xl transition duration-300"
              >
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

                <p id={descId} className="text-gray-700 mb-4">
                  {project.description}
                </p>

                <ul
                  id={techId}
                  aria-label="Technologies used"
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tech.map((tag, i) => (
                    <li key={i} className="list-none">
                      <span className="text-xs bg-navy text-white px-2 py-1 rounded-full font-sans">
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
                  className="text-navy underline underline-offset-4 decoration-darkgray hover:decoration-2 hover:font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy rounded-sm font-medium text-sm"
                >
                  View project
                  <span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true"> →</span>
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
