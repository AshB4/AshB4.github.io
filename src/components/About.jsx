import { useRef } from 'react';
import CanvasHexFrame from './HexFrames';

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-7"
    >
      <CanvasHexFrame containerRef={sectionRef} columns={28} rows={12} />
      <div className="relative z-10 mx-auto max-w-4xl rounded-2xl bg-hero-glass/80 p-5 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
        <h2 id="about-heading" className="text-center font-serif text-3xl font-bold text-darkpurple sm:text-4xl">
          A Little About Me
        </h2>
        <div className="mx-auto mt-4 max-w-3xl space-y-3 text-base leading-relaxed text-muted sm:text-lg">
          <p>I'm a software engineer with a background in business operations and a focus on building practical applications.</p>
          <p>Before moving into software development, I spent years managing teams, solving operational problems, and finding ways to make everyday work run more efficiently. That experience still shapes how I approach development.</p>
          <p>I've worked on healthcare platforms, automation tools, customer-facing applications, and complex API integrations. I enjoy understanding how systems work, identifying bottlenecks, and building solutions that make people's work easier.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
