import { useRef } from 'react';
import Ash from '../assets/ColorPopAsh.webp';
import AbLogo from '../assets/AbLogo.png';
import { RESUME_URL } from '../lib/resumeLink';
import CanvasHexFrame from './HexFrames';
import ProfileHeroCard from './ProfileHeroCard';

const Hero = () => {
  const heroSectionRef = useRef(null);

  return (
    <>
      <section
        id="hero"
        aria-labelledby="hero-title"
        ref={heroSectionRef}
        className="relative isolate min-h-screen overflow-hidden"
      >
        <CanvasHexFrame containerRef={heroSectionRef} />

        <div className="mx-auto max-w-xl lg:max-w-5xl px-4 sm:px-6 pt-12 sm:pt-20 pb-12 relative z-10">
          <ProfileHeroCard
            imageSrc={Ash}
            imageAlt="Portrait of Ashley Broussard"
            title={(
              <>
                Hi, I’m <span className="whitespace-nowrap">Ashley Broussard</span>
              </>
            )}
            titleId="hero-title"
            paragraphs={[
              'Frontend-focused engineer building accessible, data-driven applications across healthcare, civic tech, and SaaS.',
              'I focus on turning complex systems into usable interfaces, whether that is secure healthcare workflows, automation pipelines, or tools real people rely on every day.'
            ]}
          >
              <div className="mt-5 grid gap-2 text-sm sm:text-base text-left max-w-2xl mx-auto md:mx-0 text-slate-800">
                <p>• Built HIPAA-ready healthcare interfaces with RBAC and secure API integrations</p>
                <p>• Improved client conversion by 15% through funnel and UX optimization</p>
                <p>• Built custom internal tools that replaced third-party software and reduced costs</p>
                <p>• Designed accessible public-sector and senior-friendly interfaces for real users</p>
              </div>

              <p className="mt-4 font-semibold text-accent">
                Open to remote, hybrid, and local roles where I can own frontend architecture and ship meaningful user-facing features.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-700 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
                >
                  Download Resume
                </a>

                <a
                  href="mailto:Fleurdeviefarmsllc@gmail.com"
                  className="inline-flex items-center justify-center rounded-md border-2 border-indigo-500 px-6 py-3 font-semibold text-indigo-900 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                  aria-label="Email Ashley Broussard"
                >
                  Contact
                </a>
              </div>
          </ProfileHeroCard>
        </div>

        {/* Tech Stack */}
        <section
          id="tech-stack"
          aria-labelledby="tech-stack-title"
          className="mx-auto max-w-6xl px-4 sm:px-6 pb-14 text-center relative z-10"
        >
          <div className="relative rounded-2xl bg-white/75 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl ring-1 ring-black/5 max-w-md sm:max-w-3xl lg:max-w-5xl mx-auto">
            <img
              src={AbLogo}
              alt="Ashley Broussard monogram"
              className="absolute top-4 right-4 w-14 sm:w-14 opacity-25"
              loading="lazy"
            />

            <h2
              id="tech-stack-title"
              className="font-serif text-2xl font-bold text-darkpurple"
            >
              Tech Stack
            </h2>

            <dl className="mx-auto mt-4 grid gap-y-6 gap-x-5 text-left text-slate-800 leading-relaxed md:grid-cols-2">
              <div>
                <dt className="font-semibold font-serif">Frontend</dt>
                <dd>
                  React, TypeScript, JavaScript (ES6+), React Native, HTML5, CSS3,
                  Tailwind CSS, Bootstrap, Material UI
                </dd>
              </div>

              <div>
                <dt className="font-semibold font-serif">Backend</dt>
                <dd>
                  Node.js, Express, REST APIs, PostgreSQL, MSSQL, PHP
                </dd>
              </div>

              <div>
                <dt className="font-semibold font-serif">Cloud & DevOps</dt>
                <dd>
                  AWS (EC2, S3, Lambda), Serverless, GitHub Actions, Cloudflare, Git, GitHub
                </dd>
              </div>

              <div>
                <dt className="font-semibold font-serif">Accessibility & UX</dt>
                <dd>
                  WCAG 2.1, accessibility-first UI, responsive design, Figma, usability-focused workflows
                </dd>
              </div>

              <div>
                <dt className="font-semibold font-serif">Workflow</dt>
                <dd>
                  Agile/Scrum, Jira, Trello, remote collaboration, cross-functional product work
                </dd>
              </div>

              <div>
                <dt className="font-semibold font-serif">Focus Areas</dt>
                <dd>
                  Healthcare, civic tech, secure authentication, RBAC, senior-friendly interfaces
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
