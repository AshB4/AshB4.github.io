import Ash from '../assets/ColorPopAsh.webp';


const Hero = () => {
  return (
    <section id="hero" aria-labelledby="hero-title" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Image */}
          <div className="md:col-span-5">
            <img
              src={Ash}
              alt="Portrait of Ashley Broussard"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-7 text-center md:text-left">
            <h1
              id="hero-title"
              className="font-serif text-5xl md:text-6xl font-bold text-darkpurple leading-tight"
            >
              Hi, I’m <span className="whitespace-nowrap">Ashley Broussard</span>
            </h1>

            <p className="mt-5 text-lg text-slate-800">
              Frontend & Full-Stack Developer specializing in React, Node.js, and accessible UX. Built HIPAA-compliant healthcare platforms and civic hackathon winners that solve real problems.
            </p>

            <p className="mt-3 font-semibold text-accent">
              Open to local, remote or hybrid roles where I can ship quickly and solve real problems.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
        className="mx-auto max-w-6xl px-6 pb-14 text-center"
      >
        <h2 id="tech-stack-title" className="font-serif mt-6 text-2xl font-bold text-darkpurple">
          Tech Stack
        </h2>

        <dl className="mx-auto mt-3 inline-block max-w-3xl text-left text-slate-800 leading-relaxed">
          <div className="mt-2">
            <dt className="font-semibold font-serif">Languages &amp; Frameworks</dt>
            <dd>JavaScript, React, Node.js, PHP, WordPress, MODX, MySQL, PostgreSQL</dd>
          </div>
          <div className="mt-2">
            <dt className="font-semibold font-serif">Frontend</dt>
            <dd>Tailwind, Bootstrap, Material UI, Formik, Yup, HTML5, CSS3</dd>
          </div>
          <div className="mt-2">
            <dt className="font-semibold font-serif">Dev &amp; Ops</dt>
            <dd>Git, GitHub, Netlify, Heroku, REST APIs, Postman</dd>
          </div>
          <div className="mt-2">
            <dt className="font-semibold font-serif">Design</dt>
            <dd>Figma, UX Writing, WCAG, SEO, Analytics</dd>
          </div>
          <div className="mt-2">
            <dt className="font-semibold font-serif" >Workflow</dt>
            <dd>GoHighLevel, Jira, ChatGPT, Agile/Scrum</dd>
          </div>
        </dl>
      </section>
    </section>
  );
};

export default Hero;
