const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-slate-50 text-gray-800 py-16 px-6 text-center"
    >
      <h2
        id="contact-title"
        className="text-4xl font-serif font-bold mb-6 text-darkpurple"
      >
        Get in Touch
      </h2>

      <p className="text-lg font-sans mb-8 max-w-xl mx-auto">
        I’m open to remote roles, contract work, and collaborations.  
        Email me directly or send a message on LinkedIn — I’d love to connect.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:Fleurdeviefarmsllc@gmail.com"
          className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 transition"
          aria-label="Email Ashley Broussard"
        >
          Email Me
        </a>

        <a
          href="https://linkedin.com/in/ashley-m-broussard-33a392253"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-indigo-700 text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 transition"
          aria-label="Message Ashley Broussard on LinkedIn (opens in a new tab)"
        >
          Message on LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
