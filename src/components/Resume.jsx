// src/components/Resume.jsx
const Resume = () => {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white text-gray-900"
    >
      <h2
        id="resume-heading"
        className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-darkpurple text-center"
      >
        Resume
      </h2>

      {/* SUMMARY */}
      <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 text-center leading-relaxed">
        Frontend Engineer (React, TypeScript) with 5+ years building accessible,
        production web applications across healthcare, SaaS, and civic tech.
        Specialized in WCAG-compliant UI systems, secure API integrations, and
        HIPAA-conscious applications used by real users.
      </p>

      {/* PROOF POINTS */}
      <ul className="text-left max-w-xl mx-auto list-disc pl-6 mb-10 text-gray-800 space-y-3">
        <li>
          Built HIPAA-ready healthcare platforms with RBAC and secure API integrations (React, AWS, WCAG 2.1)
        </li>
        <li>
          Increased client conversion rates by 15% through funnel optimization and UX improvements
        </li>
        <li>
          Managed 50+ production websites (WordPress, MODX), improving performance, SEO, and reliability
        </li>
        <li>
          Delivered accessible UI systems for public-sector and enterprise applications, including DMV kiosk interfaces
        </li>
        <li>
          Built internal tools that replaced third-party software, reducing operational costs and improving workflows
        </li>
      </ul>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://docs.google.com/document/d/14MULxFNy7EDJX1LLQ6cFkwnjUc_bN0NJ2UD10cgM15I/edit?usp=sharing"
        
          className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;