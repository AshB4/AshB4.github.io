import { useEffect, useRef } from 'react';
import BackToTop from '../components/BackToTop';
import CanvasHexFrame from '../components/HexFrames';
import DecorativeHoneycomb from '../components/DecorativeHoneycomb';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import { GOVERNMENT_INQUIRY_URL, PROJECT_INQUIRY_URL } from '../lib/serviceLinks';

const pageTitle = 'Software Services | Ashley Broussard';
const pageDescription = 'Custom software, workflow automation, systems integration, and accessibility-focused improvements for businesses and public-sector organizations.';

const capabilities = [
  {
    title: 'Custom Web Applications',
    items: ['Internal tools', 'Dashboards', 'Business applications'],
  },
  {
    title: 'Workflow Automation',
    items: ['Document processing', 'Repetitive task automation', 'Data handling and routing'],
  },
  {
    title: 'API & Systems Integration',
    items: ['External APIs', 'Data synchronization', 'Connecting existing software'],
  },
  {
    title: 'Accessibility & UI Improvements',
    items: ['Responsive interfaces', 'Usability improvements', 'WCAG-focused accessibility work'],
  },
];

const proofOfWork = [
  {
    title: 'Gulf Coast Occupational Medicine',
    description: 'Built Results Hub using React and Python/FastAPI to support healthcare document processing, OCR-assisted classification, review workflows, and controlled document routing. Reached a hosted MVP; this was not a full production rollout.',
    href: '/#experience',
    linkLabel: 'Professional experience',
  },
  {
    title: 'Dealership Toolkit',
    description: 'Developed custom email automation software that replaced third-party tools and saved approximately $10,000 per month.',
    href: '/projects/#dealership-toolkit',
    linkLabel: 'View project details',
  },
  {
    title: 'Healthcare Software',
    description: 'Developed accessible React interfaces, API integrations, and healthcare application workflows, including Medicare plan comparison functionality.',
    href: '/#experience',
    linkLabel: 'Professional experience',
  },
];

function updateMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function Services() {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.content;
    const originalSocialTitle = document.querySelector('meta[property="og:title"]')?.content;
    const originalSocialDescription = document.querySelector('meta[property="og:description"]')?.content;
    const canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical?.href;

    document.title = pageTitle;
    updateMeta('meta[name="description"]', 'content', pageDescription);
    updateMeta('meta[property="og:title"]', 'content', pageTitle);
    updateMeta('meta[property="og:description"]', 'content', pageDescription);
    updateMeta('link[rel="canonical"]', 'href', 'https://ashb4.github.io/services/');

    return () => {
      document.title = originalTitle;
      if (originalDescription) updateMeta('meta[name="description"]', 'content', originalDescription);
      if (originalSocialTitle) updateMeta('meta[property="og:title"]', 'content', originalSocialTitle);
      if (originalSocialDescription) updateMeta('meta[property="og:description"]', 'content', originalSocialDescription);
      if (originalCanonical) updateMeta('link[rel="canonical"]', 'href', originalCanonical);
    };
  }, []);

  return (
    <main className="min-h-screen bg-cream font-sans text-main">
      <section
        ref={heroSectionRef}
        aria-labelledby="services-title"
        className="relative isolate overflow-hidden"
      >
        <CanvasHexFrame containerRef={heroSectionRef} />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="rounded-2xl bg-hero-glass/85 p-6 text-center shadow-xl ring-1 ring-white/10 backdrop-blur-md sm:p-10 md:p-14">
            <SectionHeading
              as="h1"
              id="services-title"
              className="font-serif text-3xl font-bold text-darkpurple sm:text-4xl md:text-5xl"
            >
              Software Solutions for Real Business Problems
            </SectionHeading>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              I build custom applications, automate repetitive work, connect existing systems, and improve software usability for businesses and public-sector organizations.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pathways-heading"
        className="matte-paper relative isolate overflow-hidden bg-surface px-4 py-14 sm:px-6 sm:py-16"
      >
        <DecorativeHoneycomb variant="projects" />
        <div className="relative z-10 mx-auto max-w-screen-lg">
          <SectionHeading id="pathways-heading" className="font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
            Ways I Can Help
          </SectionHeading>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
            <article className="flex h-full flex-col rounded-2xl border border-lavender/25 bg-project-card p-6 shadow-lg shadow-black/20 ring-1 ring-white/10 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender">Business Software &amp; Automation</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-darkpurple sm:text-3xl">Solutions for Your Business</h3>
              <p className="mt-5 leading-relaxed text-muted">
                Spending too much time on repetitive tasks? Working with software that doesn&apos;t communicate? Have an idea for an application but aren&apos;t sure where to start?
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                I build practical tools that solve those problems, from custom applications and automation to API integrations and website improvements.
              </p>
              <div className="mt-auto pt-7">
                <a
                  href={PROJECT_INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-center font-semibold text-white shadow transition hover:bg-brand/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender sm:w-auto"
                >
                  Discuss a Project
                </a>
                <p className="mt-3 text-sm text-muted">Short inquiry form · No commitment</p>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-lavender/25 bg-project-card p-6 shadow-lg shadow-black/20 ring-1 ring-white/10 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender">Public Sector &amp; Contracting</p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-darkpurple sm:text-3xl">Technology Solutions for Public-Sector Organizations</h3>
              <p className="mt-5 leading-relaxed text-muted">
                Public agencies and their technology partners need software that&apos;s practical, accessible, and built around real operational requirements.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                I provide custom application development, workflow automation, systems integration, and accessibility-focused improvements, with experience building software for healthcare and government-facing environments.
              </p>
              <ul className="mt-5 space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-lavender">
                <li>Custom applications and internal tools</li>
                <li>Workflow and document automation</li>
                <li>Accessible interfaces and API integrations</li>
              </ul>
              <div className="mt-auto pt-7">
                <a
                  href={GOVERNMENT_INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-lavender/70 px-5 py-3 text-center font-semibold text-lavender transition hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender sm:w-auto"
                >
                  Discuss a Contracting Opportunity
                </a>
                <p className="mt-3 text-sm text-muted">Government agencies · Prime contractors · Subcontracting</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="matte-paper relative isolate overflow-hidden bg-cream px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="relative z-10 mx-auto max-w-screen-lg">
          <SectionHeading id="capabilities-heading" className="font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
            Core Capabilities
          </SectionHeading>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ title, items }) => (
              <li key={title} className="rounded-xl border border-lavender/15 bg-surface/85 p-5 shadow-sm ring-1 ring-white/10 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-darkpurple">{title}</h3>
                <ul className="mt-3 space-y-1.5 pl-5 leading-relaxed text-muted marker:text-lavender">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="matte-paper relative isolate overflow-hidden bg-surface px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="relative z-10 mx-auto max-w-screen-lg">
          <SectionHeading id="experience-heading" className="font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
            Relevant Engineering Experience
          </SectionHeading>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {proofOfWork.map(({ title, description, href, linkLabel }) => (
              <li key={title} className="flex h-full flex-col rounded-xl border border-lavender/20 bg-project-card p-5 shadow-sm ring-1 ring-white/10 sm:p-6">
                <h3 className="font-serif text-xl font-bold text-darkpurple">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
                <a
                  href={href}
                  className="mt-5 inline-flex w-fit rounded-sm font-semibold text-lavender underline decoration-lavender/70 underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
                >
                  {linkLabel} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="public-sector-heading"
        className="matte-paper relative isolate overflow-hidden bg-cream px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="relative z-10 mx-auto max-w-screen-lg">
          <SectionHeading id="public-sector-heading" className="font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
            Public-Sector &amp; Prime Contractor Capabilities
          </SectionHeading>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-lavender/20 bg-surface/85 p-6 shadow-sm ring-1 ring-white/10 sm:p-8">
            <p className="leading-relaxed text-muted">
              I can contribute to application development, API integration, document workflows, automation, and accessibility-focused interface work within agency or prime-contractor teams. My related experience includes a hosted healthcare software MVP and a government-facing kiosk design prototype.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

export default Services;
