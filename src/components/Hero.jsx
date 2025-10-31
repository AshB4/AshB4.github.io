import { useRef } from 'react';
import Ash from '../assets/ColorPopAsh.webp';
import AbLogo from '../assets/AbLogo.png';
import CanvasHexFrame from './HexFrames';

const Hero = () => {
  const heroSectionRef = useRef(null);

  return (
    <>
      {/* HERO */}
<section
  id="hero"
  aria-labelledby="hero-title"
  ref={heroSectionRef}
  className="relative isolate overflow-hidden"
>
  <CanvasHexFrame containerRef={heroSectionRef} /> 
  <div className="mx-auto max-w-xl lg:max-w-5xl px-4 sm:px-6 pt-12 sm:pt-20 pb-12 relative z-10">
    <div className="rounded-2xl bg-white/65 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-xl ring-1 ring-black/5 grid items-center gap-6 sm:gap-7 md:gap-9 md:grid-cols-12">
            {/* Image */}
            <div className="md:col-span-5">
              <img
                src={Ash}
                alt="Portrait of Ashley Broussard"
              className="aspect-[4/5] w-full max-w-xs mx-auto md:max-w-none rounded-2xl object-cover shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Text */}
            <div className="md:col-span-7 text-center md:text-left">
              <h1
                id="hero-title"
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-darkpurple leading-tight"
              >
                Hi, I’m <span className="whitespace-nowrap">Ashley Broussard</span>
              </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-center text-gray-800 leading-relaxed">
  Frontend & Full-Stack Developer focused on accessible, 
  user-centered web apps built with React, Node.js, and TypeScript.
  Experienced in healthcare, civic tech, and small business tools that solve real problems.
</p>


            <p className="mt-3 font-semibold text-accent">
              Open to local, remote or hybrid roles where I can ship quickly and solve real problems.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://docs.google.com/document/d/19HFN6pRnTZDTc1Jwqptp28mheV37MvwMedhZZhBu-ZA/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-indigo-700 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender"
              >
                View Resume
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <a
                href="mailto:Fleurdeviefarmsllc@gmail.com"
                className="inline-flex items-center justify-center rounded-md border-2 border-indigo-500 px-6 py-3 font-semibold text-indigo-900 hover:bg-ingigo-900n focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                aria-label="Email Ashley Broussard"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack (centered section, left-aligned content for readability) */}
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
          <h2 id="tech-stack-title" className="font-serif text-2xl font-bold text-darkpurple">
            Tech Stack
          </h2>

          <dl className="mx-auto mt-4 grid gap-y-6 gap-x-5 text-left text-slate-800 leading-relaxed md:grid-cols-2">
            <div>
              <dt className="font-semibold font-serif">Languages &amp; Frameworks</dt>
              <dd>JavaScript, React, Node.js, PHP, WordPress, MODX, MySQL, PostgreSQL</dd>
            </div>
            <div>
              <dt className="font-semibold font-serif">Frontend</dt>
              <dd>Tailwind, Bootstrap, Material UI, Formik, Yup, HTML5, CSS3</dd>
            </div>
            <div>
              <dt className="font-semibold font-serif">Dev &amp; Ops</dt>
              <dd>Git, GitHub, Netlify, Heroku, REST APIs, Postman</dd>
            </div>
            <div>
              <dt className="font-semibold font-serif">Design</dt>
              <dd>Figma, UX Writing, WCAG, SEO, Analytics</dd>
            </div>
            <div>
              <dt className="font-semibold font-serif">Workflow</dt>
              <dd>GoHighLevel, Jira, ChatGPT, Agile/Scrum</dd>
            </div>
          </dl>
        </div>
      </section>
    </section>
    </>
  );
};

export default Hero;  
