// src/components/Projects.jsx
import DmvKiosk from "../assets/DmvKisok.png";
import RedStick from "../assets/RedStick.jpeg";
import TFHA from "../assets/SHCS.png";

const projects = [
  {
    title: 'Healthcare Platform (Better Mind Care)',
    description:
      'Built a HIPAA-ready healthcare interface using React, focusing on accessible UI patterns and secure data handling. Developed component systems, client-side state management, and WCAG 2.1-compliant workflows. Implemented RBAC and secure API integrations for protected health data in a production environment.',
    tech: ['React', 'TypeScript', 'AWS', 'RBAC', 'WCAG 2.1'],
    link: null,
    img: null,
    imgAlt: 'Healthcare application interface with accessible design patterns',
  },
  {
    title: 'True Fidelity Healthcare Advisors',
    description:
      'Built and shipped a Medicare plan comparison platform using React, Node.js, and AWS. Integrated a complex insurance API for real-time plan data and implemented RBAC with secure data handling. Designed a senior-friendly UI with WCAG-compliant accessibility.',
    tech: ['React', 'Node.js', 'AWS', 'RBAC', 'WCAG 2.1'],
    link: 'https://www.truefidelityhealthcareadvisors.com',
    img: TFHA,
    imgAlt: 'Healthcare platform interface for Medicare plan comparison with accessible UI',
  },
  {
    title: 'DMV Kiosk Redesign',
    description:
      'Designed an ADA-compliant touchscreen kiosk interface for high-volume DMV environments. Focused on large touch targets, simplified navigation, and high-contrast layouts to reduce user error and cognitive load.',
    tech: ['Figma', 'UX Design', 'Accessibility', 'ADA'],
    link: 'https://www.figma.com/design/Ha96R0dYgtZmIt0ya22zkn/PrototypeKiosk?node-id=0-1&m=dev&t=ZrXN5VhMuKGLRU4M-1',
    img: DmvKiosk,
    imgAlt: 'Accessible DMV kiosk interface with large buttons and high contrast',
  },
  {
    title: 'Redstick Waggers',
    description:
      'Built a cross-platform mobile app using React Native and Firebase to surface Baton Rouge Open Data. Integrated real-time data and geolocation features. Awarded 1st place at SQL Saturday hackathon.',
    tech: ['React Native', 'Firebase', 'Expo', 'Open Data API'],
    link: 'https://github.com/jbrackin1/RedStickWaggers',
    img: RedStick,
    imgAlt: 'Mobile app showing dog park locations and amenities with map-based UI',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="max-w-screen-lg mx-auto py-16 sm:py-20 px-4 sm:px-6"
    >
      <h2
        id="projects-heading"
        className="text-3xl sm:text-4xl font-serif font-bold text-center mb-10 sm:mb-12 text-darkpurple"
      >
        Featured Projects
      </h2>

      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const cardId = `project-${index}`;

          return (
            <li key={cardId} className="list-none">
              <article className="relative overflow-hidden bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">

                {/* Decorative blobs */}
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

                  {/* IMAGE (safe handling) */}
                  <figure className="mb-4">
                    {project.img ? (
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100">
                        <img
                          src={project.img}
                          alt={project.imgAlt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] w-full flex items-center justify-center rounded-md bg-slate-100 text-sm text-gray-500">
                        Private healthcare project
                      </div>
                    )}
                  </figure>

                  <h3 className="text-xl font-serif font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-700">
                    {project.description}
                  </p>

                  {/* TECH TAGS */}
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <li key={i}>
                        <span className="text-xs bg-emerald-700 text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* LINK / NDA */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 underline underline-offset-4 hover:font-semibold text-sm"
                    >
                      View project →
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500 italic">
                      Private healthcare project (HIPAA-compliant) - details available upon request
                    </span>
                  )}

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