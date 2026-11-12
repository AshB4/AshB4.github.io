import AbLogo from '../assets/AbLogo.png';
import SectionHeading from './SectionHeading';

const categories = [
  {
    title: 'Frontend',
    technologies: 'React, TypeScript, JavaScript (ES6+), React Native, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI'
  },
  {
    title: 'Backend',
    technologies: 'Python, FastAPI, Node.js, Express, REST APIs, SQL, PostgreSQL, MSSQL, PHP'
  },
  {
    title: 'Cloud & DevOps',
    technologies: 'AWS (EC2, S3, Lambda), Serverless, GitHub Actions, Cloudflare, Git, GitHub'
  },
  {
    title: 'Accessibility & UX',
    technologies: 'WCAG 2.1, accessibility-first UI, responsive design, Figma, usability-focused workflows'
  },
  {
    title: 'Workflow',
    technologies: 'Agile/Scrum, Jira, Trello, remote collaboration, cross-functional product work'
  },
  {
    title: 'Focus Areas',
    technologies: 'Healthcare, civic tech, secure authentication, RBAC, senior-friendly interfaces'
  }
];

const TechStack = () => (
  <section
    id="tech-stack"
    aria-labelledby="tech-stack-title"
    className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-16"
  >
    <div className="relative mx-auto max-w-md rounded-2xl bg-surface/80 p-5 shadow-xl ring-1 ring-white/10 backdrop-blur-md sm:max-w-3xl sm:p-6 md:max-w-5xl md:p-8">
      <img
        src={AbLogo}
        alt="Ashley Broussard monogram"
        className="absolute right-4 top-4 w-14 opacity-25"
        loading="lazy"
      />
      <SectionHeading id="tech-stack-title" className="font-serif text-2xl font-bold text-darkpurple">
        Technical Stack
      </SectionHeading>
      <dl className="mx-auto mt-4 grid gap-x-5 gap-y-6 text-left leading-relaxed text-muted md:grid-cols-2">
        {categories.map(({ title, technologies }) => (
          <div key={title}>
            <dt className="font-serif font-semibold">{title}</dt>
            <dd>{technologies}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default TechStack;
