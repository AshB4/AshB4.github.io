import { RESUME_URL } from '../lib/resumeLink';
import DecorativeHoneycomb from './DecorativeHoneycomb';
import SectionHeading from './SectionHeading';

const roles = [
  {
    company: 'Gulf Coast Occupational Medicine',
    title: 'Software Engineer, Workflow Automation & Systems Integration (Contract through Glo)',
    dates: 'Sep 2026 – Nov 2026',
    description: 'Developed a React and Python/FastAPI healthcare document-processing MVP with staff review, controlled routing, and permissions. Worked on Windows Server, IIS, HTTPS, deployment, testing, and reliability improvements.'
  },
  {
    company: 'Better Mind Care',
    title: 'Software Engineer',
    dates: 'Jul 2025 – Apr 2026',
    description: 'Developed accessible React application interfaces, authentication workflows, role-based permissions, and API integrations for healthcare software.'
  },
  {
    company: 'Envoc',
    title: 'Frontend Developer (Contract)',
    dates: 'Feb 2025 – Apr 2025',
    description: 'Contributed to enterprise React interfaces and accessible government-facing kiosk design.'
  },
  {
    company: 'True Fidelity Healthcare Advisors',
    title: 'Frontend Developer (Contract)',
    dates: 'Oct 2024 – Oct 2025',
    description: 'Co-developed a Medicare comparison platform using React, Node.js, PHP, and AWS, integrating complex insurance API data into accessible comparison workflows.'
  },
  {
    company: 'ServiceHawk',
    title: 'Full-Stack Web Developer',
    dates: 'Sep 2024 – Feb 2025',
    description: 'Maintained and improved 50+ client websites, delivering technical integrations, troubleshooting, performance improvements, and workflow automation.'
  },
  {
    company: 'Dealership Toolkit',
    title: 'Frontend Developer (Contract)',
    dates: 'Aug 2023 – Aug 2024',
    description: 'Built Python email automation that replaced third-party software and saved approximately $10,000 per month. Also developed React applications and inventory data automation.'
  },
  {
    company: 'Sparq',
    title: 'Frontend Developer',
    dates: 'Jan 2023 – Apr 2023',
    description: 'Built React scheduling functionality with authentication, role-based access, calendar integrations, and real-time updates.'
  }
];

const ProfessionalExperience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="matte-paper relative overflow-hidden bg-surface px-4 py-14 text-main sm:px-6 sm:py-16"
  >
    <DecorativeHoneycomb variant="experience" />
    <span id="resume" className="block scroll-mt-8" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-4xl">
      <SectionHeading id="experience-heading" className="mb-8 font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
        Professional Experience
      </SectionHeading>
      <p className="mb-6 text-center text-sm text-muted/80">Contract engagements may overlap.</p>
      <ol className="space-y-6">
        {roles.map(({ company, title, dates, description }) => (
          <li key={company} className="border-l-2 border-brand/50 pl-4 sm:pl-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-serif text-xl font-bold text-darkpurple">{company}</h3>
              <p className="shrink-0 text-sm font-medium text-muted/80">{dates}</p>
            </div>
            <p className="mt-1 font-semibold text-muted">{title}</p>
            <p className="mt-2 leading-relaxed text-muted">{description}</p>
          </li>
        ))}
      </ol>
      <div className="mt-9 text-center">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow transition hover:bg-brand/85 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
        >
          Download Résumé
        </a>
      </div>
    </div>
  </section>
);

export default ProfessionalExperience;
