// src/components/Resume.jsx
const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-4xl font-serif font-bold mb-6 text-darkpurple">Résumé</h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        Full-stack developer with a UX focus, automation mindset, and a track record of launching useful tools and accessible sites.
      </p>
      <ul className="text-left max-w-xl mx-auto list-disc list-inside mb-6 text-gray-700">
        <li>Built insurance comparison platform with filters for fixed-income users (SeniorHealthcareSolution.net)</li>
        <li>Won SQL Saturday Hackathon with full-stack civic app</li>
        <li>Maintained 50+ client websites (WordPress/MODX)</li>
        <li>Launched GitHub commit automation ritual tool (Green Square Ritual)</li>
      </ul>
      <a
        href="https://docs.google.com/document/d/19HFN6pRnTZDTc1Jwqptp28mheV37MvwMedhZZhBu-ZA/edit?usp=sharing"
        className="inline-block bg-lavender text-white font-semibold px-6 py-3 rounded shadow hover:bg-purple-400 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Résumé
      </a>
    </section>
  );
};

export default Resume;