// src/components/Resume.jsx
const Resume = () => {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-20 px-6 bg-white text-gray-900"
    >
      {/* Heading is the programmatic label for the section */}
      <h2 id="resume-heading" className="text-4xl font-serif font-bold mb-6 text-darkpurple text-center">
        Resume
      </h2>

      <p className="text-lg max-w-2xl mx-auto mb-6 text-center">
        Full‑stack developer with a UX focus, automation mindset, and a track record of launching useful tools and accessible sites.
      </p>

      {/* Use a <ul> for lists and keep language concrete and scannable */}
     <ul className="text-left max-w-xl mx-auto list-disc pl-6 mb-8 text-gray-800">
  <li>Improved client funnels and site performance at Service Hawk, managing 50+ WordPress and MODX sites and delivering a 15% sales lift for one customer</li>
  <li>Developed a custom mass-email platform at Dealership Toolkit that scaled to 1M+ sends per month with secure error handling</li>
  <li>Engineered a scheduling interface at Sparq with React and AWS integration, including secure authentication and role-based permissions</li>
  <li>Contributed UI/UX upgrades at Envoc, delivering enterprise React web apps with ADA-friendly features under tight deadlines</li>
</ul>


      {/* Button-styled link with: high contrast, visible focus, and new‑tab notice for screen readers */}
      <p className="text-center">
        <a
          href="https://docs.google.com/document/d/19HFN6pRnTZDTc1Jwqptp28mheV37MvwMedhZZhBu-ZA/edit?usp=sharing"
          className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 hover:bg-indigo-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View full resume <span className="sr-only">(opens in a new tab)</span>
        </a>
      </p>
    </section>
  );
};

export default Resume;
