import { useRef } from 'react';
import Ash from '../assets/ColorPopAsh.webp';
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
        className="relative isolate overflow-hidden"
      >
        <CanvasHexFrame containerRef={heroSectionRef} />

        <div className="mx-auto max-w-xl lg:max-w-5xl px-4 sm:px-6 pt-12 sm:pt-20 pb-12 relative z-10">
          <ProfileHeroCard
            imageSrc={Ash}
            imageAlt="Portrait of Ashley Broussard"
            title={(
              <>
                Hi, I’m <span className="md:whitespace-normal lg:whitespace-nowrap">Ashley Broussard</span>
              </>
            )}
            titleId="hero-title"
            subtitle="Software Engineer | Full-Stack Development, Automation & Systems Integration"
            paragraphs={[
              'I build web applications, connect systems, and automate the repetitive work that slows businesses down.',
              "My experience spans healthcare software, internal business tools, API integrations, and accessible web applications."
            ]}
          >
              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-4 justify-center md:justify-start lg:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 font-semibold text-white shadow hover:bg-brand/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
                >
                  View My Work
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 font-semibold text-white shadow hover:bg-brand/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
                >
                  Download Résumé
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-indigo-500 px-6 py-3 font-semibold text-lavender hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
                >
                  Contact
                </a>
              </div>
          </ProfileHeroCard>
        </div>

      </section>
    </>
  );
};

export default Hero;
