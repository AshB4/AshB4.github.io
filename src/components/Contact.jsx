const Contact = () => {
  return (
    <section id="contact" className="bg-emerald-50 text-gray-800 py-16 px-6 text-center">
      <h2 className="text-4xl font-serif font-bold mb-6 text-darkpurple">Get in Touch</h2>
      <p className="text-lg font-sans mb-8 max-w-xl mx-auto">
        Want to work together? I’m open to remote roles, contract work, and cool collaborations.
        Reach out below or check out what I’ve built.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-base font-medium">
        <a
          href="mailto:Fleurdeviefarmsllc@gmail.com"
          className="text-emerald-700 hover:underline"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/ashley-m-broussard-33a392253"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AshB4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://seniorhealthcaresolution.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 hover:underline"
        >
          SeniorHealthcareSolution.net
        </a>
      </div>
    </section>
  );
};

export default Contact;
