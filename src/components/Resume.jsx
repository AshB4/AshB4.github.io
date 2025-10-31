// src/components/Resume.jsx
const Resume = () => {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white text-gray-900"
    >
      <h2 id="resume-heading" className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-darkpurple text-center">
        Resume
      </h2>

      <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 text-center leading-relaxed">
        Frontend-focused full-stack developer with 5+ years of freelance and agency experience. I build accessible, scalable web apps using React, Node.js, and WordPress — with a track record of delivering real outcomes across healthcare, SaaS, and civic tech.
      </p>

      <ul className="text-left max-w-xl mx-auto list-disc pl-6 mb-8 text-gray-800 space-y-3">
        <li>
          Built a HIPAA-ready Medicare plan comparison tool used by seniors and caregivers (React, AWS, WCAG 2.1)
        </li>
        <li>
          Delivered SBIR-ready MVPs for health tech startups — including trauma-informed journaling tools and RBAC dashboards
        </li>
        <li>
          Managed 50+ WordPress and MODX client sites, resolving SEO issues and improving funnel conversion by 15%
        </li>
        <li>
          Shipped UI/UX upgrades to enterprise React apps in .NET environments and participated in agile team sprints
        </li>
        <li>
          Contributed to AI/LLM model optimization and prompt refinement for a generative language model firm
        </li>
      </ul>

      <p className="text-center">
        <a
          href="https://drive.google.com/drive/u/0/folders/13erfq0f3DiUAtMV1rRm8lSq1GIOrQ8Nx"
          className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 hover:bg-indigo-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Resume <span className="sr-only">(opens in a new tab)</span>
        </a>
      </p>
    </section>
  );
};

export default Resume;
