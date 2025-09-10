const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-slate-50 text-gray-800 py-16 px-6 text-center"
    >
      <h2 id="contact-title" className="text-4xl font-serif font-bold mb-6 text-darkpurple">
        Get in Touch
      </h2>

      <p className="text-lg font-sans mb-8 max-w-xl mx-auto">
        Want to work together? I’m open to remote roles, contract work, and cool collaborations.
        Reach out below or check out what I’ve built.
      </p>

      {/* Landmark + real list for assistive tech */}
      <nav aria-label="Contact links">
        <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <li>
            <a
              href="mailto:Fleurdeviefarmsllc@gmail.com"
              className="text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 rounded-sm"
              aria-label="Email Ashley Broussard"
            >
              Email
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/ashley-m-broussard-33a392253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 rounded-sm"
              aria-label="Open Ashley Broussard’s LinkedIn profile (opens in a new tab)"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/AshB4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline underline-offset-4
               decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline
                focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-navy rounded-sm"
              aria-label="Open Ashley Broussard’s GitHub (opens in a new tab)"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>

          <li>
            <a
              href="https://seniorhealthcaresolution.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 rounded-sm"
              aria-label="Visit SeniorHealthcareSolution.net project (opens in a new tab)"
            >
              SeniorHealthcareSolution.net
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Contact;
