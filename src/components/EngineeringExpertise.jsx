import SectionHeading from './SectionHeading';

const areas = [
  {
    title: 'Full-Stack Applications',
    description: 'Building accessible, maintainable web applications and internal business tools using React, Python, Node.js, APIs, and databases.'
  },
  {
    title: 'Workflow Automation',
    description: 'Developing software to organize information, process documents, and reduce repetitive manual tasks.'
  },
  {
    title: 'Systems & API Integration',
    description: 'Connecting software, databases, and external services to improve how information moves between systems.'
  },
  {
    title: 'Accessibility & User Experience',
    description: 'Building clear, responsive interfaces with accessible patterns, practical workflows, and attention to real users.'
  }
];

const EngineeringExpertise = () => (
  <section
    id="engineering-expertise"
    aria-labelledby="expertise-heading"
    className="mx-auto max-w-screen-lg px-4 py-14 sm:px-6 sm:py-16"
  >
    <SectionHeading id="expertise-heading" className="font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
      Engineering Expertise
    </SectionHeading>
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {areas.map(({ title, description }) => (
        <li key={title} className="rounded-xl bg-surface/80 p-5 shadow-sm ring-1 ring-white/10 sm:p-6">
          <h3 className="font-serif text-xl font-bold text-darkpurple">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default EngineeringExpertise;

