import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-slate-50 text-gray-800 py-16 px-4 sm:px-6 text-center"
    >
      <h2 id="contact-title" className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-darkpurple">
        Get in Touch
      </h2>

     <p className="text-base sm:text-lg font-sans mb-8 max-w-xl mx-auto leading-relaxed">
  I’m a front-end–focused full stack developer open to full-time, contract, or freelance opportunities. 
  Reach out to discuss accessible, user-first web projects or just say hello.
</p>


      {/* Landmark + real list for assistive tech */}
      <nav aria-label="Contact links">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base font-medium">
          <li>
            <a
              href="mailto:Fleurdeviefarmsllc@gmail.com"
              className="inline-flex items-center gap-2 text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 rounded-sm"
              aria-label="Email Ashley Broussard"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/ashley-m-broussard-33a392253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 rounded-sm"
              aria-label="Open Ashley Broussard’s LinkedIn profile (opens in a new tab)"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/AshB4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 underline underline-offset-4
               decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline
                focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-emerald-600 rounded-sm"
              aria-label="Open Ashley Broussard’s GitHub (opens in a new tab)"
            >
              <Github className="h-4 w-4" />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>

          <li>
            <a
              href="https://truefidelityhealthcareadvisors.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 underline underline-offset-4 decoration-slate-700 hover:decoration-2 hover:font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 rounded-sm"
              aria-label="Visit SeniorHealthcareSolution.net project (opens in a new tab)"
            >
              <ExternalLink className="h-4 w-4" />
              TrueFidelityHealthcareAdvisors.com
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Contact;
